### 前言
**React作为Facebook 内部开发 Instagram 的项目中，是一个用来构建用户界面的优秀 JS 库，于 2013 年 5 月开源。作为前端的三大框架之一，React的应用可以说是非常的广泛，包括BAT在内的许多大公司很多项目都是基于其开发的。根据Facebook 的附加协议，所有采用React框架的项目(事实上)将全部免费赠予facebook使用，这对于大公司来说无疑不是灾难性的。**

**Vue：除了VDom之外，Vue的响应性能和React相比还是有很大的区别，无论是本身的语法层面还是外围的第三方支持软件，总之，迁移起来不会是那么容易的事情。** 

*但是作为一名热爱前端的技术人员,学习优秀的技术栈仿佛已经成了一种习惯,在这里结合[阮一峰React](http://www.ruanyifeng.com/blog/2015/03/react.html)以及对阮一峰老师15年的教程进行版本更新,简单介绍一下React的入门,本文中所有demo代码都以图片形式展示,目的是建议手打尝试，而不是直接复制，如需代码可以点击[这里](https://github.com/LLZUPUP/React)。*

---

## 使用 create-react-app 快速构建 React 开发环境
create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。

create-react-app 自动创建的项目是基于 Webpack + ES6 。

- yarn add create-react-app -g
- create-react-app projectName
- cd projectName
- yarn start

然后打开浏览器输入http://localhost:3000/,就可以看到React的六芒星LOGO了。<br>
**以下是React重要的部分**
- JSX – 允许我们编写类似HTML的语法 转换为lightweightJavaScript对象。
- 虚拟DOM – 实际DOM的JavaScript表示。
- React.Component – 您创建新组件的方式
- render（方法） – 描述特定组件的 UI 外观 。
- ReactDOM.render – 将React组件渲染到DOM节点。
- state – 组件的内部数据存储（对象）。
- constructor（this.state） – 建立组件初始 state(状态) 的方式。
- setState – 一种辅助方法，用于更新组件的 state(状态) 并重新渲染 UI。
- props – 从父组件传递给子组件的数据。
- propTypes – 允许您控制传递给子组件的某些 props(属性) 的存在或类型。
- defaultProps – 允许您为组件设置默认 props(属性) 。
- 组件的生命周期:<br>
    1. componentDidMount – 装载组件后触发
    2. componentWillUnmount – 在组件卸载之前触发
    3. getDerivedStateFromProps – 当组件装载时以及每当props 更改时触发。 用于在其 props(属性) 更改时更新组件的状态
- 事件:<br>
    1. onClick
    2. onSubmit
    3. onChange

-----
## React的JSX语法
![](https://user-gold-cdn.xitu.io/2018/7/19/164b24c14c09b349?w=619&h=471&f=jpeg&s=46280)
**HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法，它允许 HTML 与 JavaScript 的混写**
>因为React没有vue那样的v-for一键循环，所以要自己手动用map来实现
效果图:![](https://user-gold-cdn.xitu.io/2018/7/19/164b24e98add51c7?w=232&h=73&f=jpeg&s=12714)

---
## React组件嵌套组件以及数据传递子组件
![](https://user-gold-cdn.xitu.io/2018/7/19/164b25c37580c7c7?w=469&h=601&f=jpeg&s=58294)
vue通过子组件中的props来传递数据,而React则是用this.props.attr来传递，**注意，没有$符号!**
**组件类的第一个字母必须大写，否则会报错，比如HelloMessage不能写成helloMessage。另外，组件类只能包含一个顶层标签，否则也会报错。**
>JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员.我们定义了一个arr,里面是2个标题标签,通过在ul模板中添加{arr}来实现效果**(注意不是vue的""，两者不要搞混了)**
![](https://user-gold-cdn.xitu.io/2018/7/19/164b261ea66b3dd7?w=362&h=151&f=jpeg&s=23303)

----
## this.props.children
this.props.attr是取到组件传递过来的数据或属性，而this.props.children则表示组件的所有子节点,可以通过this.props.children.map来遍历出来验证。
![](https://user-gold-cdn.xitu.io/2018/7/19/164b2692af287a1b?w=861&h=567&f=jpeg&s=71907)
![](https://user-gold-cdn.xitu.io/2018/7/19/164b269fbed68add?w=574&h=54&f=jpeg&s=11292)

----
## React之PropTypes
组件的属性可以接受任意值，字符串、对象、函数等等都可以。有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。

组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求

>yarn add prop-types<br>
import PropTypes from 'prop-types'

![](https://user-gold-cdn.xitu.io/2018/7/19/164b27060f89edc2?w=405&h=524&f=jpeg&s=51899)
MyTitle中有一个title属性，他的值为一个字符串，我们可以通过MyTitle.propTypes来定义该组件中属性的类型.如果将title: PropTypes.string改为其他类型，就会报以下的错误。
![](https://user-gold-cdn.xitu.io/2018/7/19/164b2733fef90be0?w=874&h=135&f=jpeg&s=35842)

## React之ref
1. 同vue的ref作用一样，组件并不是真实的DOM节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM。<br>
2. 只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。<br>
3. 但是，有时需要从组件获取真实 DOM 的节点，这时就要用到 ref 属性。<br>
图片放的太多了，在这里贴一下代码..请忽视开头说的话..<br>
```
class App extends Component {
      handleClick () {
        this.refs.myTextInput.focus()
      }
      render() {
        return (
          <div className="App">
            <LikeButton/>
            <input type="text" ref="myTextInput"/>
            <input type="button" value="Focus the text input" onClick={ this.handleClick.bind(this) }/>
          </div>
        );
      }
    }
```
**在这里需要强调的是，React的事件中如果不用剪头函数，那就要用bind来绑定this。**

----
## React之this.state以及点击事件
React中的state就相当于vue里的data数据存储,而小程序的this.setData,大家懂的..

```
class LikeButton extends Component {
  state = {
    liked: false
  }
  handleClick () {
    // console.log(this)
    this.setState({
      liked: !this.state.liked
    })
  }
  render() {
    const text = this.state.liked?'liked':'don\'t like'
    return (
      <p onClick={ () => this.handleClick() }>
        You { text } this.click to toggle
      </p>
    )
  }
}
```
在这里定义一个text变量，通过state中的liked来判断text的值，然后再通过onClick点击事件来反复改变liked的值，效果可以自己通过代码实现看看，就是普通的MVVM模型。

---
## React之实现双向数据绑定
vue里面v-model一键实现的事情React又没有-0-，不过我们可以通过onChange事件来简单实现它，直接上代码.
```
class App extends Component {
  state= {
    value: 'Hello!'
  }
  handleChange (event) {
    this.setState({
      value: event.target.value
    })  }
  render() {
    const val = this.state.value
    return (
      <div className="App">
        <div>
          <input type="text" value={val} onChange={this.handleChange.bind(this)}/>
          <p>{ val }</p>
        </div>
      </div>
    );
  }
}
```

---
### React之组件生命周期
组件的生命周期分成三个状态：
- Mounting：已插入真实 DOM
- Updating：正在被重新渲染
- Unmounting：已移出真实 DOM

React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。
- componentWillMount(): 在插入真实DOM之前调用
- componentDidMount(): 在插入真实DOM之后调用
- componentWillUpdate(object nextProps,object nextState): 在被重新渲染之前调用
- componentDidUpdate(object prevProps, object prevState): 在被重新渲染之后调用
- componentWillUnmount(): 在移除真实DOM之前调用

此外，React 还提供两种特殊状态的处理函数。
- componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
- shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

另外，组件的style属性的设置方式也值得注意，不能写成`style="opacity:{this.state.opacity};"`而要写成`style={{opacity: this.state.opacity}}`

## 结语
**作为一个前端程序猿很不容易，前端的技术更新太快，也出现了“别更新了，老子学不动了”这类前端的梗。不过前端层出不穷的技术让我们看到了前端的未来，我们都是热于分享的人，希望正在学习的我也能够帮助到正在学习的你。  这些demo都在我的[github](https://github.com/LLZUPUP/React)，感兴趣的朋友可以clone下来看下，最近搭了一个[个人blog](https://llzupup.github.io/)，欢迎来踩，PC端主题一股科幻风有没有！！主题来自于[hexo主题](https://github.com/ZEROKISEKI/hexo-theme-gal)
最后说一句！很重要！如果我的这篇文章帮助到了你，那你可以点个star再走嘛~一起upupup!**




