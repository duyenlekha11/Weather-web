import { Table} from 'antd';
import React from 'react';
const Year2023 = () => {
const columns = [
  {
    title: 'Month',
    dataIndex: 'month',
    key: 'month',
  
  },
  {
    title: 'Highest Temperature',
    dataIndex: 'highestTemperature',
    key: 'highestTemperature',
  },
  {
    title: 'Lowest Temperature',
    dataIndex: 'lowestTemperature',
    key: 'lowestTemperature',
  },
  
  
];
const data = [
  {
    key: '1',
    month: 'January',
    highestTemperature: 48,
    lowestTemperature: 34,
    
  },
  {
    key: '2',
    month: 'February',
    highestTemperature: 54,
    lowestTemperature: 34,
  },
  {
    key: '3',
    month: 'March',
    highestTemperature: 63,
    lowestTemperature: 35,
  },
  {
    key: '4',
    month: 'April',
    highestTemperature: 70,
    lowestTemperature: 40,
    
  },
  {
    key: '5',
    month: 'May',
    highestTemperature: 79,
    lowestTemperature: 52,
  },
  {
    key: '6',
    month: 'June',
    highestTemperature: 87,
    lowestTemperature: 61,
  },
  {
    key: '7',
    month: 'July',
    highestTemperature: 92,
    lowestTemperature: 65,
    
  },
  {
    key: '8',
    month: 'August',
    highestTemperature: 90,
    lowestTemperature: 73,
  },
  {
    key: '9',
    month: 'September',
    highestTemperature: 83,
    lowestTemperature: 68,
  },
  {
    key: '10',
    month: 'October',
    highestTemperature: 73,
    lowestTemperature: 64,
    
  },
  {
    key: '11',
    month: 'November',
    highestTemperature: 63,
    lowestTemperature: 38,
  },
  {
    key: '12',
    month: 'December',
    highestTemperature: 52,
    lowestTemperature: 35,
  },
];
return(
    <div>
        <Table columns={columns} dataSource={data} />;
    </div>
)
};
export default Year2023;

