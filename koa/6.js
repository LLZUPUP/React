const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const test = ctx =>{
  ctx.response.body = '<a href="/test">Index Page</a>'
  ctx.response.redirect = '/test'
}
app.use(route.get('/',test))
app.listen(3000)