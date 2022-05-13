import React, { Component } from "react";
import Footers from "../common/footers";
import Header from "../common/header";
import HomePageTwo from "../pages/home/HomePage";

//Second layout
class MainTwoLayout extends Component {

  //Inherited Parent options.
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <>
          <Header/>
                <HomePageTwo/>
            <Footers/>
        </>
    );
  }
}

export default MainTwoLayout;
