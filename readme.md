# Takehome Test

# Setup and Run Instructions

- Install `node.js` v.12 or higher
- Install `git`
- Clone repo
- Run `npm i` in terminal
- Run (ex passing: `SERVER="https://www.yahoo.com" USER=405 MESSAGE=404 npm t`), where `SERVER` is the baseURL, `MESSAGE` and `USER` are the expected response codes for respective calls, OR
- Run (ex failing: `SERVER="https://www.yahoo.com" USER=201 MESSAGE=200 npm t`)

## From Scratch details

#### Terminal:

- `git init`

#### Terminal:

- `npm init --yes`

#### Terminal:

- `npm i mocha axios chai @babel/cli @babel/core @babel/preset-env @babel/register --save-dev`

#### Added `babel.config.js` file:

- `module.exports = { presets: [ ['@babel/preset-env', { targets: { node: '12' } }] ] }`

#### Create Mocha Config File

- Added `.mocharc.js` file (https://github.com/mochajs/mocha/blob/master/example/config/.mocharc.js)
- Commented: `reporter-option`, `fgrep`, `file`, `grep`, `watch-files`, `watch-ignore`
- Set: `timeout: '10000'`
- Set: `jobs: 10`
- Set: `parallel: true`

#### Create Folder Structure:

- Added `/test` folder
- Added `/test/specs` folder
- Added `/test/specs/apiCheck.spec.js` file

#### Update `package.json` file

- ` "scripts": { "test": "mocha" }`

#### Build Out Spec File...

- Imported `chai` and `axios`
- Built basic test objects: `user` and `message` based on the document, as I understood it
- Tested a simple `describe` and `it` for functionaliity to return user object - Successful
- Nested an axios get request in a `before((done) => {...})` (https://www.npmjs.com/package/axios)
- Tested thegeneric GET request with `https://www.google.com` - Successful
- Added `status` and `data` variables & set to destructure the response in the axios call
- Copied the `Create-New-User` describe for message test and renamed to `Send-Message-To-System`
- Added ternary operator for local variable `apiUrl`, system variable `SERVER`
- Replaced axios calls with template literal `${apiUrl}` and retested - Successful
- Added proper axios paths for `${apiUrl}/user/new` and `${apiUrl}/message/new`
- Added objects to axios calls, respectively
- Updated `status` and `data` response breakdowns for axios catch functions to include `error.`
- Updated axios calls to `put` for `/user/new` and `post` for `/message/new`
- Added chai expect for `status = 201` for `/user/new` (put)
- Added chai expect for `status = 200` for `/message/new` (post)
- Added env variables object for status codes, because that's just better
- Added this.readme.md
- Added task .pdf
- Added example `userData.js` array of objects for import and looping in `./test` folder
- Added .gitignore file

#### Unknowns

- Actual status codes and responses that will be returned
- Actual apiUrl
- Unique `code` values to create a user

#### TODO's

- Randomize user object values
- Build out an array of user objects that test edge cases
- forEach() through array of user objects
- Test for all known or unknown response codes
