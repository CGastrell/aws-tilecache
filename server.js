var pmx = require('pmx');
pmx.init();

var express = require('express');
app = express();

var tilecache = require('express-tile-cache');

var capabaseargenmap = {
  urlTemplate: 'http://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0',
  cachepath: 'cache'
}

app.use('/', tilecache(capabaseargenmap));

app.use(pmx.expressErrorHandler());

app.listen(process.env.PORT || 3000);
