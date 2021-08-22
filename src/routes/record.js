const KoaRouter = require('koa-router');

const router = new KoaRouter();

// GET /record/device/:uuid
// Gets records by device uuid, paginated
router.get('/device/:uuid', async (ctx) => {
  const { uuid } = ctx.params;
  const { page, limit } = ctx.query;
  const records = await ctx.orm.record.findAndCountAll({
    where: {
      deviceUuid: uuid,
    },
    order: [['createdAt', 'DESC']],
    limit,
    offset: (page - 1) * limit,
  });
  ctx.body = records;
});

// GET /record/:id
// Gets a record by id
router.get('/:id', async (ctx) => {
  const { id } = ctx.params;
  const record = await ctx.orm.record.findByPk(id);
  ctx.body = record;
});

// POST /record
// Creates a record by body data
router.post('/', async (ctx) => {
  const { body } = ctx.request;
  // TODO: Validate body and throw error if invalid
  const record = await ctx.orm.record.create(body);
  ctx.body = record;
});

// PUT /record/:id
// Updates a record by id
router.put('/:id', async (ctx) => {
  const { id } = ctx.params;
  const { body } = ctx.request;
  const record = await ctx.orm.record.update(id, body);
  ctx.body = record;
});

module.exports = router;
