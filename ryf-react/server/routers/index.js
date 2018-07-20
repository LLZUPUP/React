const router = require('koa-router')(); //返回一个路由对象
const User = require('../model/user'); //
const koaBody = require('koa-body'); 
router.get('/', async (ctx) => { //路由由函数中间件组成
    ctx.body = '首页';
});
router.get('/users', async (ctx) => {
    const users = await User.findAll({
      where: {
        isdelete: 0
      }
    })
    ctx.body = users;
});

router.post('/user', koaBody(), async (ctx) => {
    console.log(ctx)
    // 后端要拿到前端传来的数据 
    // console.log(ctx.request.body);
    const user = await User.build(ctx.request.body).save();
    ctx.body = {
        status: 'ok'
    }
})

module.exports = router