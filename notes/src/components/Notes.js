import React, { Component } from 'react';
import Note from './Note'
import { db, loadCollection } from '../database'

class Notes extends Component {
  constructor (props) {
    super(props)
    this.getInitialData()
  }
  getInitialData () {
    loadCollection('notes').then(collection=>{
      // console.log(collection)
      // collection.insert([
      //   {
      //     text: 'hello ~'
      //   },
      //   {
      //     text: 'hola ~'
      //   }
      // ]);
      // db.saveDatabase();
      const entities = collection.chain().find().simplesort('$loki','isdesc').data()
      // console.log(entities)
      this.setState({
        entities
      })
    })
  }
  // state => vue的data
  state = {
    entities: []
  }
  createEntry () {
    loadCollection('notes').then((collection) => {
      const entity = collection.insert({
        text: ''
      })
      db.saveDatabase();
      this.setState((prevState) => {
        const _entities = prevState.entities;
        _entities.unshift(entity);
        return {
          entities: _entities
        }
      })
    })
  }
  destoryEntity(entity) {
    // this.state.entities.remove(entity)
    const _entities = this.state.entities.filter((_entity) => {
      console.log(entity)
      return _entity.$loki !== entity.$loki
    })
    this.setState({
      entities: _entities
    })
    loadCollection('notes').then((collection)=>{
      collection.remove(entity)
      db.saveDatabase()
    })
  }
  render () {
    // jsx 在js里面直接写html
    // react className
    // html 是会编译成js的。 class是一个关键字，不能使用，所以要用className
    const entities = this.state.entities;
    const noteItems = entities.map((entity,index) => {
      return <Note key={ entity.$loki } entity={entity} destoryEntity={this.destoryEntity.bind(this)}/>
    })
    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          Notes App _ React.js        
        </h4>
        <button onClick={this.createEntry.bind(this)} className= "ui right floated basic violet button">添加笔记</button>
        <div className="ui divided items">
          { noteItems }
          {!this.state.entities.length && <span className="ui small disabled header">还没有笔记，请先添加</span>}
        </div>
      </div>
    )
  }
}

export default Notes