var pmx = require('pmx');
pmx.init();

var express = require('express');
app = express();

var tilecache = require('express-tile-cache');
var s3storage = require("s3-tile-storage");
var redisStore = require("redis-tile-store");

var ignTiles = {
  urlTemplate: 'http://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0',
  cachepath: 'cache'
}

app.use('/', tilecache(ignTiles));

app.use(pmx.expressErrorHandler());

app.listen(process.env.PORT || 3000);
