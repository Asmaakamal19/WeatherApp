import React, {Component} from 'react';
import Weatherlist from './component/Weatherlist';
import Form from './component/Form';
const Api_key="381a458c655718185cd1bbfbbd16a196";
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {
  state={
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  getweather= async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}`);
    const data = await api.json();
    console.log(data)
    if(city && country){
      this.setState({
        tempreature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''
      })
    }else{
      this.setState({
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'Please Enter Data!'
      })
    }
  }
  render(){
    return (
      <div className="Myapp">
        <div className="form-container">
          <Form getweather={this.getweather}/>
          <Weatherlist 
            tempreature= {this.state.tempreature}
            city= {this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}
export default App;