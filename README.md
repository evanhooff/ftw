# Clean Project #

## Prerequisites

To build the frontend code you'll need to install some software: 

- [node and npm] (https://docs.npmjs.com/getting-started/installing-node) Node - V6.10.1; NPM - V5.3.0;

## Building the project

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Pre commit hook

If you want to use that the eslint will be fires before you commit to git, please do the following:
- Manually copy the pre-commit file to the project .git/hooks folder
    - On OSX you can run "ln -s ../../pre-commit .git/hooks/pre-commit" to create a link to the pre-commit script instead of copying it over.
- Run 'git init'
- Now when you commit the 'npm run lint' is called for checking if you might have eslint error's.
- If you have error's you need to fix them before committing.