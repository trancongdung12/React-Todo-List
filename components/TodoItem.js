import React, { Component } from "react";
import "./TodoItem.css";
import check from '../image/check.svg';
import checked from '../image/checked.svg';
import classNames from 'classnames';
class TodoItem extends Component {
  render() {
    const {item,isCompleted} = this.props;
    var url = check;
    if(item.isDone){
      url = checked;
    }
    return (

      <div onClick={isCompleted} className={classNames('TodoItem',
      {
        'TodoItem-Done':item.isDone
      }
      )}>
        <div className="item">
          <img className="img-check" src={url} />
          <p>{this.props.item.title}</p>
        </div>
      </div>
    );
  }
}
export default TodoItem;
