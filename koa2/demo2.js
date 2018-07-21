const Koa = require('koa')
const app = new Koa()

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
    let PostData = await parsePostData(ctx)
    ctx.body = PostData
  }else {
    ctx.body = '<h1>404!</h1>'
  }
}
function parsePostData(ctx) {
  return new Promise((resolve,reject)=> {
    try {
      let postData = ''
      ctx.req.addListener('data', (data)=> {
        postData += data
      })
      ctx.req.on('end',function() {
        let parseData = parseQueryStr(postData)
        resolve(parseData)
      })
    }catch(error) {
      reject(error)
    }
  })
}
function parseQueryStr(querystring) {
  let queryData = {}
  let queryStrList = querystring.split('&')
  console.log(queryStrList)
  console.log(queryStrList.entries())
  for(let [index,querystring] of queryStrList.entries()) {
    let itemList = querystring.split('=')
    console.log(itemList)
    queryData[itemList[0]] = (itemList[1])
  }
  return queryData
}

app.use(test)
app.listen(3000,()=> {
  console.log('app sever is starting')
})