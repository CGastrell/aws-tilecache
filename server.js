var express = require('express');
app = express();

var tilecache = require('express-tile-cache');

var capabaseargenmap = {
  urlTemplate: 'http://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0',
  cachepath: 'cache'
}

app.use('/baseargenmap', tilecache(capabaseargenmap));

app.listen(process.env.PORT || 3000);
