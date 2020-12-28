# e-permitting-fb

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## heroku deploy

### configuration setup

``` bash
# create application on heroku
heroku create e-permitting-fb

# setup heroku variables
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set HOST=0.0.0.0
heroku config:set NODE_ENV=production

# verify variables
heroku config
```

Create Procfile in project root

Add script to package.json

``` json
"heroku-postbuild": "nuxt build"
```

### deployment

from master branch

``` bash
git push heroku master
```

from firebase branch

``` bash
git push heroku firebase:master
```

open application on heroku

``` bash
heroku open
```

For detailed explanation on heroku deployment, check out [Nuxt.js docs](https://nuxtjs.org/faq/heroku-deployment).
