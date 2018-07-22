const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')



//子路由
let home = new Router()
home.get('/zhaolele',async ctx=>{
  ctx.body = 'zhaolele'
}).get('/todo',ctx=>{
  ctx.body = 'todo page'
})
//子路由
let page = new Router()
page.get('/zhaolele',async ctx=>{
  ctx.body = 'page zhaolele'
}).get('/todo',ctx=>{
  ctx.body = 'page page'
})
//父级路由
let router = new Router()
router.use('/home',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())

app.use(router.routes())
.use(router.allowedMethods())

app.listen(3000,()=>{
  console.log('app server start success!')
})