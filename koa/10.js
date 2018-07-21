const Koa = require('koa')
const fs = require('fs.promised')
const app = new Koa()

const test = async (ctx,next)=> {
  ctx.response.type = 'html'
  ctx.response.body = await fs.readFile('./template.html','utf8')
}
app.use(test)
app.listen(3000)