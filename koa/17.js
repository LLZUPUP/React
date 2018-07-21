const Koa = require('koa')
const app = new Koa()

const test = async ctx=> {
  const body = ctx.request.body;
  console.log(body)
  if(!body.name) {
    ctx.throw(400,'.name required')
  }
  ctx.body = { name: body.name }
}
app.use(koaBody())
app.listen(3000)