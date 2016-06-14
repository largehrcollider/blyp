# Contributions Guide #

## Style Guide ##
  > For our style guide, be sure to use the Hack Reactor style guide, defined in the student wiki.  
    Link: https://github.com/remotebeta/student-wiki/wiki/Style-Guide

## Branch Naming Syntax
* `master` used for final deployment
* `staging` used for last checks before deployment
* `dev` used to sync peer work before sending it out to the world. No PRs from forks from here onwards. You should always check out new branches from here.
* `feat/<featurename>` for any work in progress. Make sure branch name ends with `#<issue number>` if you want it to be tracked on waffle io. Will only take effect once branch is in organization repo. No need to squash or take any history ammending actions since these are for your personal use.

## Commit Message Syntax

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
Set up SSH on your machine.

**Fork** the repo.

Then,
```sh
git clone <your_forked_copy>
```

Add remotes
```sh
git remote add upstream git@github.com:largehrcollider/blyp.git
git remote add edu git@github.com:aryzing/blyp.git
git remote add eric
git remote add leo
git remote add steven
```

Checkout `dev` branch:
```sh
git checkout upstream/dev # detached head warning, don't worry!
```

# Standard git workflow
1. Pull upstream branch
```sh
git checkout dev
git pull upstream dev
```
2. Create a branch on your local machine
```sh
git checkout -b feat/amazing-ui-#135
```

3. Squash all the commits when done
```sh

```

4. Rebase your branch
```sh
git pull --rebase upstream master #make sure you are on your local branch, not local master
```

5. Push branch to your fork
```sh
git push origin <branch_name>
```

6. Submit pull request.
Organization name / master (BASE)
Your name / branch (TARGET)

7. Sync with organization master branch before working on new issue

```sh
git pull --rebase upstream master
git branch -d <branch_name> # deletes only if merged
```
