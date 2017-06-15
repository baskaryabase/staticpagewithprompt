import React,{Component} from 'react';
import Head from './head';
import Sec from './sec';
import Enter from './enter';
import Step from './step';

export default class App extends Component{
  render(){
    return(
      <div>
      <Head />
      <Sec />
      <Enter />
      <Step />

      </div>
    )
  }
}
