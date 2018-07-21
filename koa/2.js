const Koa = require('koa')
const app = new Koa;
const fs = require('fs')


const test = ctx => {
  ctx.response.type='html';
  ctx.response.body = fs.createReadStream('./template.html')
}

app.use(test)
app.listen(3000)