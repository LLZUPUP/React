const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')


const test = ctx=>{
  ctx.response.type = 'html';
  ctx.response.body = '<h1>Index html</h1>';
}
const user = ctx => {
  ctx.response.body = 'USER'
}
app.use(route.get('/',test))
app.use(route.get('/user',user))

app.listen(3000)