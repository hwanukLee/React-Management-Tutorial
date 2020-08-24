import React, { Component } from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';

/* import { makeStyles } from '@material-ui/core/styles'; */
import { withStyles } from '@material-ui/core/styles'; 
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
 root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    table : {
        minWidth: 1080
    },
    progress: {
      margin: theme.spacing(2)
    }
  })

/* 
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
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍길동3',
    'birthday': '1973',
    'gender': '남자',
    'job': '개발자'
  }
]
 */

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0  
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err)); 
  }

  /* state ={
    customers: "",
    completed: 0
  } */

  componentDidMount(){
    //this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err)); 
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

   render(){
     const { classes } = this.props;

     return (
       <div>
        <Paper className={classes.root}>
          <Table className = {classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
                <TableCell>설정</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map ( c => { 
                return( <Customer 
                  stateRefresh={this.stateRefresh} 
                  key={c.id} id={c.id} image={c.image} name={c.name} 
                  birthday={c.birthday} gender={c.gender} jog={c.job} /> ); 
              }) :  
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress 
                    className={classes.progress} 
                    variant="determinate" 
                    value={this.state.completed} />
                </TableCell>
              </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh} />
       </div>
     );
   }
 }

/* export default App; */
export default withStyles(styles)(App); 
/* export default makeStyles(styles)(App); */

