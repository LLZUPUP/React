const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

const router = new Router({
  prefix: '/llzz'
})
router.get('/',(ctx, next)=> {
  ctx.body = '<h1>hello zhaolele</h1>'
})
router.get('/todo',(ctx,next)=> {
  ctx.body = '<h2>Todo Page</h2>'
})
app.use(router.routes())
.use(router.allowedMethods())

app.listen(3000,()=>{
  console.log('app server start success!')
})