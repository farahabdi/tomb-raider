# What
This is the Tomb Raider 2018 AU movie campaign web HUB
See https://visualjazz.jira.com/wiki/spaces/VRS/pages/229316879/Tomb+Raider

# How

## Dev Build

* install yarn
* yarn install
* yarn start

## Prod Build

* yarn build

## Deployment
* do a build manually - commit
* push master branch to the remote server (managed via Dokku)

(Not worth setting up proper CI for this project as its so transitory. We wouldn't normally commit build branches but quick and dirty for this is ok - this thing will only be live for a month!).


