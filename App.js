
import './App.css';
import React,{Component} from 'react';
import { ReactDOM } from 'react-dom/client';
import styled from 'styled-components';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={value:" "}
    this.addName=this.addName.bind(this);
    this.college=this.college.bind(this);
    
  }
  addName(event){
    this.setState({value:event.target.value});
  }
  college(event){
    alert("name entered correctly:"+this.state.value);
    event.preventDefault();
  }
 render(){
  return(
    <div>
     <form onSubmit={this.college}>
      <label>Name:</label>
      <input type="text" value={this.state.value} onChange={this.addName} placeholder='Name' required />

      <br></br><br></br>
     
      <input type="submit" value="submit"/>
     </form>
    </div>

  );
}
}




export default App;
