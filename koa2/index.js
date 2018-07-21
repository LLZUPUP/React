const Koa = require('koa')
const app = new Koa()

app.use(async(ctx)=> {
  ctx.body = 'hello llzzz'
})
app.listen(3000)
console.log('app is starting')