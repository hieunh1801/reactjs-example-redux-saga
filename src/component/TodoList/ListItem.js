import React from 'react';
import { List } from 'antd';
import Item from "./Item";
import './styles.css';
let id = -1;
const fakeData = [
  {
    id: ++id,
    title: 'Item ' + id,
    content: 'Content of Item.js id: ' + id,
  },
  {
    id: ++id,
    title: 'Item ' + id,
    content: 'Content of Item.js id: ' + id,
  },
  {
    id: ++id,
    title: 'Item ' + id,
    content: 'Content of Item.js id: ' + id,
  },
  {
    id: ++id,
    title: 'Item ' + id,
    content: 'Content of Item.js id: ' + id,
  },{
    id: ++id,
    title: 'Item ' + id,
    content: 'Content of Item.js id: ' + id,
  },
];

function ListItem(props) {
  return (
    <div className="listItemContainer">
      <List
        dataSource={fakeData}
        bordered
        renderItem={
        item => (
          <Item item={item} />
        )
      }/>
    </div>
  );
}

export default ListItem;