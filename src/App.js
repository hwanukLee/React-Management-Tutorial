import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer = [
{
  'id': 1,
  'image': 'https://placeing.com/64/64/1',
  'name': '홍길동1',
  'birthday': '1973',
  'gender': '남자',
  'job': '직장인'
},
{
  'id': 2,
  'image': 'https://placeing.com/64/64/2',
  'name': '홍길동2',
  'birthday': '1973',
  'gender': '남자',
  'job': '디자이너'
},
{
  'id': 3,
  'image': 'https://placeing.com/64/64/3',
  'name': '홍길동3',
  'birthday': '1973',
  'gender': '남자',
  'job': '개발자'
}

]

class App extends Component{
   render(){
     return (
       {
         
        /* <Customer 
          id = {customers[0].id}
          image = {customers[0].image}
          name = {customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
       /> */}

       <div>
        <Customer 
            id = {customers[0].id}
            image = {customers[0].image}
            name = {customers[0].name}
            birthday={customers[0].birthday}
            gender={customers[0].gender}
            job={customers[0].job}
        />

        <Customer 
            id = {customers[1].id}
            image = {customers[1].image}
            name = {customers[1].name}
            birthday={customers[1].birthday}
            gender={customers[1].gender}
            job={customers[1].job}
        />

        <Customer 
            id = {customers[2].id}
            image = {customers[2].image}
            name = {customers[2].name}
            birthday={customers[2].birthday}
            gender={customers[2].gender}
            job={customers[2].job}
        />
      </div>

     );
   }
 }
export default App;
