var gcloud = require('gcloud');
var config = require('../../config.js');
var fs = require('fs');
var multer = require('multer');
var path = require('path');

/**
* helper functions
*/
var getPublicUrl = function getPublicUrl (filename) {
  return 'https://storage.googleapis.com/' + CLOUD_BUCKET + '/' + filename;
};

// var getLocalUrl = function getLocalUrl (filename) {
//   return path.resolve(__dirname, '../../../images', filename);
// };

/**
* Configuration for multer.
*/
if (config.get('NODE_ENV') === 'production') {
  multer = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // no larger than 5MB
    }
  });
} else if (config.get('NODE_ENV') === 'development') {
  multer = multer({
    dest: path.resolve(__dirname, '../../../uploads')
  });
}

/**
* Configuration for saveImage
*/
var saveImage;
if (config.get('NODE_ENV') === 'production') {
  saveImage = function saveImageGCS(req, res, next) {
    var CLOUD_BUCKET = config.get('CLOUD_BUCKET');

    var storage = gcloud.storage({projectId: config.get('GCLOUD_PROJECT')});
    var bucket = storage.bucket(CLOUD_BUCKET);

    if (!req.file) {
      return next();
    }

    var gcsname = `${req.user.business.replace(/\W+/g, '-').toLowerCase()}-${req.body.sku}-${Date.now()}`;
    var file = bucket.file(gcsname);
    var stream = file.createWriteStream();

    stream.on('error', function (err) {
      req.file.cloudStorageError = err;
      next(err);
    });

    stream.on('finish', function () {
      req.file.destination = 'gcp'; // google cloud platform
      req.file.cloudStorageObject = gcsname;
      req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
      req.file.imgSrc = getPublicUrl(gcsname);
      next();
    });

    stream.end(req.file.buffer);
  }

} else if (config.get('NODE_ENV') === 'development') {
  saveImage = function saveImageLocal(req, res, next) {
    if (!req.file) {
      return next();
    }

    fs.mkdir(path.resolve(__dirname, '../../../images'), (err) => {
      var filePath = path.resolve(__dirname, '../../../uploads', req.file.filename);
      var filename = `${req.user.business.replace(/\W+/g, '-').toLowerCase()}-${req.body.sku}-${Date.now()}`;
      var target = path.resolve(__dirname, '../../../images/', filename);

      fs.rename(filePath, target, (err) => {
        if (err) {
          console.error(err);
          next(err);
        }
        req.file.destination = 'fs'; // file system
        req.file.fsUrl = target;
        req.file.imgSrc = path.resolve('/api/images/', filename);
        next();
      });
    });
  };
}

module.exports = {
  multer: multer,
  saveImage: saveImage
};
