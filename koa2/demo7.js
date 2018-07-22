const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

let mode = new Router()
mode.get('/aaa',(ctx,next)=>{
  ctx.body = ctx.query

})

app.use(mode.routes(),mode.allowedMethods())
app.listen(3000)