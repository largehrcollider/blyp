# Contributions Guide #

## Branch Naming Syntax
* `master` used for final deployment
* `staging` used for last checks before deployment
* `dev` used to sync peer work before sending it out to the world. No PRs from forks from here onwards. You should always check out new branches from here.
* `feat-<featurename>` for any work in progress. Make sure branch name ends with `#<issue number>` if you want it to be tracked on waffle io. Will only take effect once branch is in organization repo. No need to squash or take any history ammending actions since these are for your personal use.

## Pull Request Message Syntax
Whenever submitting a PR to largehrcollider, the name of the PR should be:
```
closes #<number> [optional description]
```

Examples of two valid PRs:
```
closes #23
closes #19 database schemas design
```

# One time setup
Edit .gitconfig:
```sh
git config --global push.default simple
```

Set up SSH on your machine:

[Step1](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).

[Step2](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

**Fork** the repo.

Then,
```sh
# clone with ssh!
git clone <your_forked_copy>
```

Add remotes
```sh
git remote add upstream git@github.com:largehrcollider/blyp.git
git remote add edu git@github.com:aryzing/blyp.git
git remote add eric git@github.com:ericdsmith/blyp.git
git remote add leo git@github.com:leov2000/blyp.git
git remote add steven git@github.com:steveprograms/blyp.git
```

Checkout `dev` branch:
```sh
git checkout dev
```

# Standard git workflow
**First** Pull upstream branch
```sh
git checkout dev
git pull upstream dev
```
**Second** Create a branch on your local machine
```sh
git checkout -b feat-amazing-ui-#135
git checkout -b feat-myFeature-#26 dev
#will create new branch from dev no matter where you are
```

**_Optional** Push new branch to oganization repo to automatically set the issue as in progress.

Then, work on your branch until you feel like its a good time to send a PR

**Third** Push branch to your fork
```sh
git push origin <branch_name> # name required only first time
# or
git push origin
# can also push to upstream
git push upstream
```

**Fourth** Submit pull request from most recent place you pushed to. If you don't remember, just push again!
Organization name / dev (BASE)
Your name / branch (TARGET)

**Fifth** Sync with organization master branch before working on new issue

```sh
git checkout dev
git pull upstream dev
git branch -d <branch_name> # will delete only if already merged
```

**Every morning**:
1. Pull dev and delete all merged branches
2. Merge dev into all currently active branches, fix merge conflicts.
