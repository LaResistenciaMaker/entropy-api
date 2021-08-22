const KoaRouter = require('koa-router');

const router = new KoaRouter();

// GET /device/
// Get all devices
router.get('device.list', '/', async (ctx) => {
  const devices = await ctx.orm.Device.findAll();
  ctx.body = JSON.stringify(devices);
  ctx.status = 200;
});

// GET /device/:id
// Get a device by id
router.get('device.show', '/', async (ctx) => {
  const device = await ctx.orm.Device.findById(ctx.params.id);
  ctx.body = JSON.stringify(device);
  ctx.status = 200;
});

// POST /device/
// Create a new device by receiving a JSON body including UUID.
router.post('device.create', '/', async (ctx) => {
  // body should contain UUID and device Version
  const device = await ctx.orm.Device.create(ctx.request.body);
  // TODO: Handle collisions and verify UUID.
  ctx.body = JSON.stringify(device);
  ctx.status = 201;
});

// PUT /device/:id
// Update a device by id
router.put('device.update', '/:id', async (ctx) => {
  const device = await ctx.orm.Device.findById(ctx.params.id);
  device.update(ctx.request.body);
  ctx.body = JSON.stringify(device);
  ctx.status = 200;
});

module.exports = router;
