import React, { Component } from 'react';
import './App.css';
import Child from './parentTochild/child';

class App extends Component{
  
  state={
    title:'placeholder title'
  }

  changeTheWorld=(newTitle) =>{
    this.setState({title:newTitle});
  }

  render(){
    return (
      <div className="App">
        <Child doWhatever={this.changeTheWorld.bind(this,'new world')}title={this.state.title}/>
      </div>
    );
  }
}

export default App;
