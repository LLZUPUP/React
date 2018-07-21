const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')


app.use(bodyParser())
const test = async ctx=> {
  if(ctx.url==='/' && ctx.method==='GET') {
    //显示表单页面
    let html = `
      <h1>llzzz koa request POST</h1>
      <form method="POST" action="/table">
        <p>username</p>
        <input name="username"/><br/>
        <p>age</p>
        <input name="age"/><br/>
        <p>website</p>
        <input name="website"/><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  }else if(ctx.url==='/table' && ctx.method==='POST') {
    let PostData = ctx.request.body
    ctx.body = PostData
  }else {
    ctx.body = '<h1>404!</h1>'
  }
}

app.use(test)
app.listen(3000,()=> {
  console.log('app sever is starting')
})