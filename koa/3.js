const Koa = require('koa');
const app = new Koa()

const test = ctx=>{
  if(ctx.request.path!=='/') {
    ctx.response.type='html';
    ctx.response.body = '<h1>邓志远</h1>';
  }else {
    ctx.response.type = 'html'
    ctx.response.body = '<h1>vvvvvvv</h1>'
  }
}
app.use(test)
app.listen(3000)