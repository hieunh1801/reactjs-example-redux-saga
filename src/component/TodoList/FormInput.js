import React from 'react';
import {
  Form, Icon, Input, Button,
} from 'antd';
import './styles.css';

function FormInput(props) {
  return (
    <React.Fragment>
      <Form layout="inline">
        <Form.Item className="txtInputTitle txtInput" label="Nhập vào tiêu đề">
          <Input
            prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }}/>}
          />
        </Form.Item>
        <Form.Item className="txtInputContent txtInput" label="Nhập vào nội dung">
          <Input
            prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)',}}/>}
          />
        </Form.Item>
      </Form>
      <Form.Item className="btnGroup">
        <Button className="btn" type="primary" onClick={() => {
          console.log("Thêm nội dung")
        }}>
          Thêm nội dung
        </Button>
        <Button  className="btn" type="danger" onClick={() => {
          console.log("Xóa bỏ")
        }}>
          Xóa bỏ
        </Button>
        <Button  className="btn" type="ghost" onClick={() => {
          console.log("Cập nhật")
        }}>
          Cập nhật
        </Button>
      </Form.Item>

    </React.Fragment>
  );
}

export default FormInput;