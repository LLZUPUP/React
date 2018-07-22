const Koa = require('koa')
const app = new Koa()

app.use(async (ctx,next)=>{
  if(ctx.url==='/page') {
    ctx.cookies.set('name','zhaolele', {
      path: '/page',
      domain: '127.0.0.1',
      maxAge: 1000*60*60*24,
      expires: new Date('2018-7-23'),
      httpOnly: false,
      overwrite: false
    })
    ctx.body = 'cookies is ok!'
  }else {
    if(ctx.cookies.get('name')) {
      ctx.body = ctx.cookies.get('name')
    }else {
      ctx.body = 'cookie is none'
    }
  }
})

app.listen(3000)