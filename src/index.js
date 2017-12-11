import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Navbar from './components/navbar'
import JSON from './db.json'
import ItemList from './components/item_list';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      news:JSON,
      filtered:JSON
    }
  }

  //Share with 'Navbar' component using props
  filterItems(keywords){
    //.filter helper filters arrays or collections or data and needs to return something
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords) > -1;
    })

    //Set a state for the filtered data
    this.setState({filtered})
  }

  render(){
    return(
      <div>
        <div className="navbar">
          <Navbar itemSearch={keywords=>
            this.filterItems(keywords)
          }/>
        </div>
        <div>
          <ItemList news={this.state.filtered}/>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.querySelector('#root'));
