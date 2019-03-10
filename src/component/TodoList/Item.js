import React from "react";
import { List } from 'antd';

import './styles.css';

function Item(props) {
  return (
    <List.Item
      className="item"
      id={props.item.id}
      onClick={() => {
        console.log("props.item", props.item);
      }}
      title={props.item.title}
    >
      <div className="itemContainer">
        <div className="itemTitle">
          {props.item.title}
        </div>
        <div className="itemContent">
          {props.item.content}
        </div>
      </div>
    </List.Item>
  )
}

export default Item;