import { Table} from 'antd';
import React from 'react';
import './style.css';
import month from './images/month.png'
import hot from './images/hot.png'
import cold from './images/cold.png'
import jan from './images/1.png'
import feb from './images/2.png'
import mar from './images/3.png'
import apr from './images/4.png'
import may from './images/5.png'
import jun from './images/6.png'
import jul from './images/7.png'
import aug from './images/8.png'
import sep from './images/9.png'
import oct from './images/10.png'
import nov from './images/11.png'
import dec from './images/12.png'


const Year2023 = () => {
const columns = [
  {
    title:  <div className="calendar">Month
      <img className="month" src={month}/>
      </div>,
    dataIndex: 'month',
    key: 'month',
  
  },
  {
    title: <div className='temp'>Highest Temperature
    <img className="hot" src={hot}/>
    </div>,
    dataIndex: 'highestTemperature',
    key: 'highestTemperature',
  },
  {
    title: <div className='temp'>Lowest Temperature
    <img className="cold" src={cold}/>
    </div>,
    dataIndex: 'lowestTemperature',
    key: 'lowestTemperature',
  },
  
  
];
const data = [
  {
    key: '1',
    month: <div className='monthly'>
      <img className="jan" src={jan}/>
    </div>,
    highestTemperature: <div className='hitemp'>48</div>,
    lowestTemperature: <div className='lotemp'>34</div>,
    
  },
  {
    key: '2',
    month: <div className='monthly'>
    <img className="jan" src={feb}/>
  </div>,
    highestTemperature: <div className='hitemp'>54</div>,
    lowestTemperature: <div className='lotemp'>34</div>,
  },
  {
    key: '3',
    month: <div className='monthly'>
    <img className="jan" src={mar}/>
  </div>,
    highestTemperature: <div className='hitemp'>63</div>,
    lowestTemperature: <div className='lotemp'>35</div>,
  },
  {
    key: '4',
    month: <div className='monthly'>
    <img className="jan" src={apr}/>
  </div>,
    highestTemperature: <div className='hitemp'>70</div>,
    lowestTemperature: <div className='lotemp'>40</div>,
    
  },
  {
    key: '5',
    month: <div className='monthly'>
    <img className="jan" src={may}/>
  </div>,
    highestTemperature: <div className='hitemp'>79</div>,
    lowestTemperature: <div className='lotemp'>52</div>,
  },
  {
    key: '6',
    month: <div className='monthly'>
    <img className="jan" src={jun}/>
  </div>,
    highestTemperature: <div className='hitemp'>87</div>,
    lowestTemperature: <div className='lotemp'>61</div>,
  },
  {
    key: '7',
    month: <div className='monthly'>
    <img className="jan" src={jul}/>
  </div>,
    highestTemperature: <div className='hitemp'>92</div>,
    lowestTemperature: <div className='lotemp'>65</div>,
    
  },
  {
    key: '8',
    month: <div className='monthly'>
    <img className="jan" src={aug}/>
  </div>,
    highestTemperature: <div className='hitemp'>90</div>,
    lowestTemperature: <div className='lotemp'>73</div>,
  },
  {
    key: '9',
    month: <div className='monthly'>
    <img className="jan" src={sep}/>
  </div>,
    highestTemperature: <div className='hitemp'>83</div>,
    lowestTemperature: <div className='lotemp'>68</div>,
  },
  {
    key: '10',
    month: <div className='monthly'>
    <img className="jan" src={oct}/>
  </div>,
    highestTemperature: <div className='hitemp'>73</div>,
    lowestTemperature: <div className='lotemp'>64</div>,
    
  },
  {
    key: '11',
    month: <div className='monthly'>
    <img className="jan" src={nov}/>
  </div>,
    highestTemperature: <div className='hitemp'>63</div>,
    lowestTemperature: <div className='lotemp'>38</div>,
  },
  {
    key: '12',
    month: <div className='monthly'>
    <img className="jan" src={dec}/>
  </div>,
    highestTemperature: <div className='hitemp'>52</div>,
    lowestTemperature: <div className='lotemp'>35</div>,
  },
];
return(

    <div>
      <h1 className='year1'>
        2023
      </h1>
        <Table columns={columns} dataSource={data} />
    </div>
)
};
export default Year2023;

