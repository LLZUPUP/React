import React, { Component } from 'react';
// 对react ui 来自于阿里的antd 部分引用
import { Table, Pagnation, Input, Row, Button, Modal, Form } from 'antd';
import 'antd/dist/antd.css'
import './App.css'
const { Search } = Input
const FormItem = Form.Item
const { confirm } = Modal


class App extends Component {
  columns = [{
    dataIndex: "username",
    title: "用户"
  },{
    dataIndex: "password",
    title: "密码"
  },{
    dataIndex: "address",
    title: "地址"
  },{
    dataIndex: "action",
    title: "操作",
    width: 200,
    render: (text, row)=> {
      return (
        <div>
          <Button type="primary" onClick={()=>{this.modal('edit',row)}}>编辑</Button>
          <Button type="danger" style={{marginLeft: 10}} onClick={()=> this.remove(row)}>删除</Button>
        </div>
      )
    }
  }]
  remove(row) {
    // const that = this;
    confirm({
      title: '是否要删除该用户?',
      okText: '是',
      cancelText: '否',
      onOk:()=>{
        const _users = this.state.users.filter(data => {
          return data.id !== row.id
        })
        this.setState({
          users: _users
        })
      }
    })
}
  modal(type,row) {
    this.setState({
      visible: true,
      modalType: type //更改type为edit
    },()=>{
      this.props.form.resetFields();
      if(type==='add') return;
      this.props.form.setFieldsValue({
        username: row.username,
        password: row.password,
        address: row.address
      })
      this.setState({
        editRow: row
      })
    })
  }
  handleOk () {
    this.props.form.validateFieldsAndScroll((err, values)=>{
      const { username, password, address } = values
      const _id = this.state.id++;
      if(!err) {
        if(this.state.modalType === 'add') {    //点击添加按钮的ok时，type为默认add
          this.state.users.push({
            username,
            password,
            address,
            id: _id
          })
        }else {
          this.state.users.forEach((item) => {
            if(item.id === this.state.editRow.id) {
              item = Object.assign(item,values)
            }
          })
        }
        this.setState({
          visible: false,
        })
      }
    })
  }
  state = {
    visible: false,
    users: [{
      username: 'zk',
      password: 'zhaolele029',
      address: '杭州',
      id: 1
    }],
    modalType: 'add',
    id: 2,
    editRow: {}
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    return (
      <div className="App">
        <Row>
          <Search style={{width: 300}}></Search>
          <Button type="primary" style={{marginLeft: 20}} onClick={()=>this.modal('add')}>添加用户</Button>
        </Row>
        <Row style={{paddingTop: 20}}>
          <Table bordered pagination={false} dataSource={ this.state.users } columns={this.columns} rowKey={row=>row.id}></Table>
        </Row>
        <Modal title="添加用户" visible={this.state.visible} onOk={()=>this.handleOk()} onCancel={()=> this.setState({ visible: false })}>
          <Form>
            <FormItem label="用户" {...formItemLayout}>
              {
                getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!'}]})(<Input placeholder="UserName"/>)
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your password!'}]
                })(<Input placeholder="password"/>)
              }
            </FormItem>
            <FormItem label="地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  rules: [{ required: true, message: 'Please input your address!'}]
                })(<Input placeholder="address"/>)
              }
            </FormItem>
          </Form>
        </Modal>
      </div>
      

    );
  }
}

export default Form.create()(App);
