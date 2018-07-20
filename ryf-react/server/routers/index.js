const router = require('koa-router')()
const User = require('../model/user')

router.get('/',async (ctx)=>{
  ctx.body = '首页'
})
router.get('/users',async (ctx)=>{
  const user = {
    name: 'zk',
    password: '21423424',
  }
  ctx.body = user
})

module.exports = router;