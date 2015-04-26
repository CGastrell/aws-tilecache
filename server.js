var pmx = require('pmx');
pmx.init();

var express = require('express');
app = express();

var tilecache = require('express-tile-cache');
var s3storage = require("s3-tile-storage");
var redisStore = require("redis-tile-store");
var config = require('./config.json');

var ignTiles = {
  urlTemplate: 'http://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0',
  storage: s3storage({
    accessKeyId: config.keyId,
    secretAccessKey: config.secret,
    region: "us-west-2",
    bucket: "express-tilecache"
  }),
  store: redisStore({
    port: 6379,
    host: "tile-cache-redis.vcmzdd.0001.usw2.cache.amazonaws.com"
  }),
  enableInfo: true,
  clearRoute: "/clear"
}

app.use('/', tilecache(ignTiles));

app.use(pmx.expressErrorHandler());

app.listen(process.env.PORT || 3000);
