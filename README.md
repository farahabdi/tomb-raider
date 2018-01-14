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
* push master branch to the remote dokku server

### Notes
* Not worth setting up proper CI for this project as its so transitory. We wouldn't normally commit build branches but quick and dirty for this is ok - this thing will only be live for a month!)
* for any new domain need to add it to the firebase authorised domains for Auth
* current dokku remotes:
1. dokku@isobar.space:tombraider (test server)
2. (prod TBC)

