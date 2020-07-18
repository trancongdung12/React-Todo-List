import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import tick from "./image/tick.svg";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentFillter: 'all',
      todo : [
        {title: "Ăn sáng", isDone: true},
        {title: "Ăn trưa"}, 
        {title: "Ăn tối"}
       ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  changeComplete(item){
    return (event)=>{
      const isDone = item.isDone;
      const {todo} = this.state;
      const index= todo.indexOf(item);
      this.setState({
        todo:[
          ...todo.slice(0,index),
          {
            ...item,
            isDone: !isDone
          },
          ...todo.slice(index+1)
        ]
      });
    }
  }

  onKeyUp(event){
    if(event.keyCode === 13){ 
      const text = event.target.value;
      if(!text){
        return;
      }
      this.setState({
        newItem : "",
        todo:[
          {title:text, isDone: false},
          ...this.state.todo
        ]
      });
    }
  }
  onChange(event){
    this.setState({
      newItem : event.target.value,
    });
  }
  render() {
    const {todo,newItem} = this.state;
    
    if(todo.length>0)
    {
      return (
        <div className="App">
          <div className="header">
            <img src={tick} height="30px" width="30px"/>
            <input value={newItem} type="text" placeholder="Nhập việc cần làm" onChange={this.onChange} onKeyUp={this.onKeyUp}   />
          </div>
          {todo.map((item, index) => (
            <TodoItem key={index} item={item} isCompleted={this.changeComplete(item)} />
          ))}
        </div>
      );
    }
    else{
      return(
        <div className="App">Nothing here</div>
      );
    }
  }
}

export default App;
