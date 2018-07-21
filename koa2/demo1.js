const Koa = require('koa')
const app = new Koa()

const test = async ctx=> {
  //从request中接受GET请求
  let url = ctx.url;
  let req_query = ctx.request.query
  let req_quertstring = ctx.request.querystring
  //从上下文ctx中接受GET请求
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring
  ctx.type = 'json'
  ctx.body = {
    url,
    req_query,  
    req_quertstring,   //字符串
    ctx_query,
    ctx_querystring
  }
}

//这个时候在url里输入参数/?id=2&name=zhaolele就可以看到效果了
app.use(test)
app.listen(3000,()=> {
  console.log('app server is starting')
})