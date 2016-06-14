# Contributions Guide #

## Style Guide ##
  > For our style guide, be sure to use the Hack Reactor style guide, defined in the student wiki.  
    Link: https://github.com/remotebeta/student-wiki/wiki/Style-Guide

## Branch Naming Syntax
* `master` used for final deployment
* `staging` used for last checks before deployment
* `dev` used to sync peer work before sending it out to the world. No PRs from forks from here onwards.
* `feat/<featurename>` as many as you like

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

# Standard git workflow
1. Pull upstream branch
```sh
git pull --rebase upstream master
```
2. Create a branch on your local machine
```sh
git checkout -b <branch_name>
```

3. Squash all the commits when done
```sh
git rebase -i HEAD~4
git rebase -i 32FFA1 # all comits AFTER selected
```
Inside editor, change all `pick`s to `fixup` except first. Change name of that one squashed commit to `closes #X` with command
```sh
git commit --amend
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
