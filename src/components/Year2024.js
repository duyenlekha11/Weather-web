import { Table} from 'antd';
import React from 'react';
const Year2024 = () => {
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
    highestTemperature: 51,
    lowestTemperature: 30,
    
  },
  {
    key: '2',
    month: 'February',
    highestTemperature: 54,
    lowestTemperature: 36,
  },
  {
    key: '3',
    month: 'March',
    highestTemperature: 61,
    lowestTemperature: 39,
  },
  {
    key: '4',
    month: 'April',
    highestTemperature: 72,
    lowestTemperature: 50,
    
  },
  {
    key: '5',
    month: 'May',
    highestTemperature: 81,
    lowestTemperature: 60,
  },
  {
    key: '6',
    month: 'June',
    highestTemperature: 86,
    lowestTemperature: 66,
  },
  {
    key: '7',
    month: 'July',
    highestTemperature: 92,
    lowestTemperature: 71,
    
  },
  {
    key: '8',
    month: 'August',
    highestTemperature: 90,
    lowestTemperature: 69,
  },
  {
    key: '9',
    month: 'September',
    highestTemperature: 82,
    lowestTemperature: 63,
  },
  {
    key: '10',
    month: 'October',
    highestTemperature: 71,
    lowestTemperature: 51,
    
  },
  {
    key: '11',
    month: 'November',
    highestTemperature: 61,
    lowestTemperature: 40,
  },
  {
    key: '12',
    month: 'December',
    highestTemperature: 52,
    lowestTemperature: 29,
  },
];
return(
    <div>
        <Table columns={columns} dataSource={data} />;
    </div>
)
};
export default Year2024;