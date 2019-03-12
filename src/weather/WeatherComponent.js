import React from 'react';
import PropsType from 'prop-types';
import { Form, Button, Input, Icon, Card, AutoComplete, Alert} from 'antd';
import { WiDaySunny } from "weather-icons-react";
import {getWeatherByName} from './api';
import {cityListOfVietNam} from './vnCity';
import './styles.css';

const dataSource = cityListOfVietNam.map((item) => {
  return {id: item.id, name: item.name}
});

class WeatherComponent extends React.PureComponent {
  state = {
    id: '',
    city: '',
  };
  renderTitle = () => {
    return (
      <div className="titleContainer">
        <h4>{this.state.city}</h4>
        <WiDaySunny size={60} color='#c10037' />
      </div> 
    );
  };

  /*
  * Lấy giá trị select được ra từ input và gán cho state
  * */
  handleOnSelect = (value) => {
    this.setState({
      city: value
    })
  };

  /*
  * Lọc các option khi chọn
  * */
  handleFilterOption = (inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1

  render() {
    return (
      <div className="weatherContainer">
        <h1>Weather Application</h1>
        <Form layout="inline">
          <Form.Item>
            <AutoComplete 
              dataSource={dataSource.map((item) => item.name)}
              filterOption={this.handleFilterOption}
              onSelect={this.handleOnSelect}
            > 
            <Input prefix={<Icon type="cloud" color="blue"/>}/>              
            </AutoComplete>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" 
            type="primary" 
            onClick={() => {
              if(!this.state.city) {
                alert('Chưa nhập');
                return;
              }
              this.props.onGetWeather(this.state.city);
            }
            }>Tìm kiếm</Button>
          </Form.Item>
        </Form>
        <Card title={this.renderTitle()} style={{width: 320}} > 
          <div>{this.props.weatherInformation}</div>
        </Card>
      </div>
    )
  }
}
WeatherComponent.propsType = {
  weather: PropsType.string,
  city: PropsType.string,
}
WeatherComponent.defaultProps = {
  weather: 'Weather',
  city:'City'
};
export default WeatherComponent;