const Koa = require('koa')
const app = new Koa()
const compose = require('koa-compose')
const test = (ctx,next)=>{
  console.log(`${Date.now()}${ctx.request.method}${ctx.request.url}`)
  next()
}
const main = ctx=> {
  ctx.response.body = 'hello world'
}

const sum = compose([test,main])
app.use(sum)
app.listen(3000)