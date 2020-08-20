import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동1',
  'birthday': '1973',
  'gender': '남자',
  'job': '직장인'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동2',
  'birthday': '1973',
  'gender': '남자',
  'job': '디자이너'
},
{
  'id': 3,
  'image': 'https://placeimg.co  m/64/64/3',
  'name': '홍길동3',
  'birthday': '1973',
  'gender': '남자',
  'job': '개발자'
}

]

class App extends Component{
   render(){
     return (
       <div>
        {customers.map ( c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} jog={c.job} /> ); }) }
       </div>
     );
   }
 }
export default App;
