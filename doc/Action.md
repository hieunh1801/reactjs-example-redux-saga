# Action 
Mục tiêu cần đạt được
- Action là gì?
- Hình dạng nó như thế nào?
- Cách tạo ra Action?
- Sử dụng Action ở chỗ nào?

## Action là gì? Hình dạng nó như thế nào?
- Action là một object thuần túy trong đó có chứa thông tin cần gửi tới store và tên của nó:
```js
// Action có ý định thêm vào list
{
    type: 'ADD_ITEM_TO_LIST',
    payload: {
        index: 1,
        title: 'Hôm nay trời nắng',
        content: 'Nhưng mà phải đi học'
    }
}

// Action có ý định xóa một phần tử khỏi list, ta chỉ cần id là đủ
{
    type: 'REMOVE_ITEM_FROM_LIST',
    payload: {
        index: 2,
    }
}

```
=> Action là một object mô tả ý định mà ta muốn thực hiện + Đính kèm thông tin liên quan

## Cách tạo ra Action
Ở ví dụ trên, ta thấy khi muốn xóa một item trong list ta cần lấy ra được id của nó, hay khi ta muốn thêm một item mới vào list thì ta cần thông tin như id, title, content của item. Chả lẽ mỗi lần ta đều phải ngồi viết ra một object như trên? Giải pháp: tạo ra function action creator.

Một điều khác nữa cần lưu ý là: type của action. Type được sử dụng khi gọi action, do đó mà ta nên tạo ra 1 file lưu trữ tên các type của action.

## Kết luận : 
Khi tạo action, ta cần tạo ra một flie lưu trữ kiểu của các action. Một file khác lưu trữ các hàm tạo ra action

```js
// Tên file: constants.js hoặc actionTypes.js
export const ADD_ITEM_TO_LIST = "ADD_ITEM_TO_LIST";
export const REMOVE_ITEM_FROM_LIST = "REMOVE_ITEM_FROM_LIST";
export const UPDATE_ITEM_FROM_LIST = "UPDATE_ITEM_FROM_LIST";

```

```js
// Tên file: action.js - tạo ra action 
import {
    ADD_ITEM_TO_LIST, 
    REMOVE_ITEM_FROM_LIST, 
    UPDATE_ITEM_FROM_LIST
} from './actionTypes.js';

let id = -1;
export const addItemToList = (title, content) => {
    return {
        type: ADD_ITEM_TO_LIST,
        payload: {
            id: ++id,
            title: title,
            content: content,
        }
    }
};

export const removeItemFromList = (id) => {
    return {
        type: REMOVE_ITEM_FROM_LIST,
        payload: {
            id: id
        }
    }
};

```

## Sử dụng Action ở đâu?