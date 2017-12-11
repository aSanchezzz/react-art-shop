import React,{ Component } from 'react';

class Navbar extends Component {

  constructor(props){
    super(props);

    //to change/manipulate state; must have super() beforehand
    this.state = {
      keywords: ''
    }
  }

  inputChange(event){
    //always use setState to change state, don't mutate using "this.state.push('')"
    this.setState({keywords:event.target.value})
    this.props.itemSearch(event.target.value)
  }

  //.bind(this) uses the Header class state, instead of the inputChange
  render(){
    return(
      <header>
        <div className="logo"
          onClick={()=>{console.log('clicked')}}
          >Craftsworth</div>
        <input onChange={this.inputChange.bind(this)}/>
      </header>
    )
  }
}

export default Navbar;
