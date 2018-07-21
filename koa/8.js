const Koa = require('koa')
const app = new Koa()

const test = (ctx,next)=>{
  console.log(`${Date.now()}${ctx.request.method}${ctx.request.url}`)
  next()
}
app.use(test)
app.listen(3000)