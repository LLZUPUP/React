const Koa = require('koa')
const app = new Koa()

const test = ctx=>{
  console.log(`${Date.now()}${ctx.request.method}${ctx.request.url}`)
  ctx.response.body = 'Hello World'
}

app.use(test)
app.listen(3000)