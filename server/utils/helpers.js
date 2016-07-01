exports.checkPermission = function(acl){
  return function(req, res, next){
    if(acl.indexOf(req.user.role) === -1){
      res.status(403).send('User does not have permission to perform this task!');
    } else {
      next();
    }
  };
};