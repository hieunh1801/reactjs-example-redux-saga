# Reducer - Nơi xử lý thông tin

Mục tiêu của bài viết
- Reducer là gì?
- Cần làm những gì để tạo ra Reducer?
- Hình dạng nó như thế nào?

## Reducer là gì?

__Reducer__ chỉ định xem state của app thay đổi như thế nào(nơi xử lý thông tin) để phản hồi lại khi mà một __Action__ gửi tới __Store__. Chú ý rằng __Action__ là một đối tượng thuần chỉ mô tả điều gì sẽ xảy ra chứ nó không mô tả state thay đổi như thế nào.   

## Cần làm những gì để tạo ra Reducer?

### Step 1: Định hình ra hình dạng của State

Trước khi tạo ra reducer ta cần định hình xem hình dạng dữ liệu mà ta sẽ lưu trữ là gì. Sẽ là một ý tưởng tốt trước khi tạo ra reducer. 

Cho app mà ta đang viết: ta cần một thuộc tính lưu lại index của item mà ta đang chọn(để còn remove, update) và danh sách các item.

```js
{
    currentItem: -1,
    todoList: {
        {
            id: 0,
            title: 'Ngày 10 tháng 3 năm 2019',
            content: 'Trời nắng, không mây, không thích hợp để ra ngoài'
        },
        ...
    }

}
```
> __Note :__ Cho những app phức tạp, ta sẽ muốn chia state ra thành nhiều thực thể nhỏ hơn để tiện xử lý. Ở bài store ta sẽ cùng xem lại hình dáng thực sự của __store__.

### Step 2: Tạo reducer.
Reducer - được tạo ra để xử lý action. Nó nhận state cũ và action => state mới
```
(oldState, action) => newState
```

Một điều cực kì quan trọng khi tạo ra reducer, đó là __keep it stay pure.__ Nghĩa là không làm bất cứ thứ gì sau đây trong reducer:

- __Không__ làm thay đổi giá trị của tham số . Nghĩa là ta không trực tiếp làm việc với tham số (ở đây là oldState và action). Thay vào đó ta gán giá trị và tính toán trên biến gán đó.
- __Không__ gọi __API__, __không router__
- __Không__ gọi __none-pure function__ như: Date.now(), Match.random().

> Reducer nên nhận state, action. Từ action nhận được reducer tính toán và trả về một state mới và không làm thay đổi state cũ. __No suprise, no side effects, no call API, no mutation. Just a calculation.__

## Hình dạng của Reducer
```js
// Tên file reducer.js
import {
    ADD_ITEM_TO_LIST, 
    REMOVE_ITEM_FROM_LIST, 
    UPDATE_ITEM_FROM_LIST
} from './actionTypes.js';

// Step 1: Tạo state mặc định.
const initialState = {
    currentId: -1,
    todoList: {},
}

const todoApp = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_LIST:
        
    }
    return state;
}


```
