const KoaRouter = require('koa-router');

const index = require('./routes/index');
const device = require('./routes/device');
const locations = require('./routes/locations');
const record = require('./routes/record');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/device', device.routes());
router.use('/locations', locations.routes());
router.use('/record', record.routes());

module.exports = router;
