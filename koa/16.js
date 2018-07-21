const Koa = require('koa')
const app = new Koa()

const test = ctx=> {
  const n = Number(ctx.cookies.get('view') || 0) + 1;   //1
  ctx.cookies.set('view',n)
  ctx.response.body = 'view '+n
}

app.use(test)
app.listen(3000)