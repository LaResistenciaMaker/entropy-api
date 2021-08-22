const KoaRouter = require('koa-router');

const router = new KoaRouter();

// GET /locations
// returns all locations not authed
router.get('/', async (ctx) => {
  const { locations } = await ctx.app.models.location.findAll({
    attributes: ['id', 'name', 'address', 'lat', 'lng'],
    order: 'name ASC',
  });

  ctx.body = locations;
});

// GET /locations/:id
// returns a single location and its rooms
router.get('/:id', async (ctx) => {
  const { location } = await ctx.app.models.location.findOne({
    where: { id: ctx.params.id },
    attributes: ['id', 'name', 'address', 'lat', 'lng'],
  });
  const { rooms } = await ctx.app.models.room.findAll({
    where: { locationId: ctx.params.id },
    attributes: ['id', 'name', 'locationId'],
    order: 'name ASC',
  });
  ctx.body = { location, rooms };
});

// GET /locations/:id/rooms
// returns all rooms for a location
router.get('/:id/rooms', async (ctx) => {
  const { rooms } = await ctx.app.models.room.findAll({
    where: { locationId: ctx.params.id },
    attributes: ['id', 'name', 'locationId'],
    order: 'name ASC',
  });
  ctx.body = rooms;
});

// GET /locations/:id/rooms/:roomId
// returns a single room and its devices joined with their 50 latest records
router.get('/:id/rooms/:roomId', async (ctx) => {
  ctx.body = {};
});

// GET /locations/:id/rooms/:roomId/records
// returns all records for a room to certain timestamp
router.get('/:id/rooms/:roomId/records', async (ctx) => {
  ctx.body = {};
});

// POST /locations/
// creates a new location by request body
router.post('/', async (ctx) => {
  const { body } = ctx.request;
  const { location } = await ctx.app.models.location.create({
    body,
  });
  ctx.body = location;
});

// POST /locations/:id/rooms
// creates a new room by request body
router.post('/:id/rooms', async (ctx) => {
  const { body } = ctx.request;
  // TODO: check if location exists and verigy deviceUuid
  const { room } = await ctx.app.models.room.create({
    body,
  });
  ctx.body = room;
});

module.exports = router;
