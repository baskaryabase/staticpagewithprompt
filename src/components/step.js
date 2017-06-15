import React,{Component} from 'react';

class Step extends Component{

  render(){
    const state ={
      ans1:'',
      ans2:'',
      name:'',
      num:''
    };
  return(

    <div style={{width:'100%',background:'#5B3522',height:'600px'}}>
    <center>
    <button onClick={()=>{
      var a1= prompt('your first trip?');
      var a2 = prompt('your nick name?');
      var na = prompt('your name?');
      var no = prompt('your phone number?');
      this.setState({ans1:a1,
                     ans2:a2,
                     name:na,
                     num:no})
    }}
    className="btn btn-lg btn-success">
    Click Here
    </button>
    </center>

    <div>
    <img style={{background:'#5B3522'}}
    className='col-md-4 img-responsive' src={require('../s1.png')} />
    </div>

    <div>
    <img style={{background:'#5B3522'}}
    className='col-md-4 img-responsive' src={require('../s2.png')} />
    </div>

    <div>
    <img style={{background:'#5B3522'}}
     className='col-md-4 img-responsive' src={require('../s3.png')} />
    </div>

    </div>
  )
}
}

export default Step;
