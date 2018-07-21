const Koa = require('koa')
const app = new Koa()
const server = require('koa-static')
const path = require('path')

const test = server(path.join(__dirname))
app.use(test)


app.listen(3000)