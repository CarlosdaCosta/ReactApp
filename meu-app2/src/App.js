import React from 'react';

import "./assets/theme/global.scss";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import Search from "./features/Search/Search";
import LyricWrapper from "./features/LyricWrapper/LyricWrapper";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      searchWorld: ""
    };
    
    this.handleSearch = this.handleSearch.bind(this);
  }


  handleSearch(e){
    this.setState({
      searchWorld: e.target.value
    });
    
  }

  render(){
    return (
      <>
        <Header/>
        <Search handleSearch={this.handSearch}/>
        <LyricWrapper/>
        <Footer/>
      </>
    );
  }
}


export default App;
