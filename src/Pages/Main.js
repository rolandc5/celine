import React, { Component } from 'react';
import './Global.css';

import * as Pages from './index';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      navigation: 2,
    }
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation(e) {
    const name = e.target.name;
    if (name === "work") {
      this.setState({ navigation: 1 });
    }
    if (name === "about") {
      this.setState({ navigation: 2 });
    }
    if (name === "cv") {
      this.setState({ navigation: 3 });
    }
  };

  render() {
    return (
      <div className="m-container">
        <div className="m-wrapper">
          <div style={{ height: 100 }}/>
          <div className="m-innerContainer">

            <div className="m-outerMenuContainer">
              <div className="m-menuContainer">
                <div className="m-nameContainer">
                  <div className="m-nameContainer">
                    <button className="m-name m-menuButton">
                      <div>CELINE</div>
                      <div>CANUTO</div>
                    </button>
                  </div>
                </div>
                <div className="m-menuDivider"/>
                <div className="m-leftSide">
                  <div className="m-menuTopSpace"/>
                  <div className="m-menu">
                    <button className="m-menuButton" name="work" onClick={ this.handleNavigation }>WORK</button>
                    <div style={{ width: 50 }}/>
                    <button className="m-menuButton" name="about" onClick={ this.handleNavigation }>ABOUT&CONTACT</button>
                    <div style={{ width: 50 }}/>
                    <button className="m-menuButton" name="cv" onClick={ this.handleNavigation }>CV/RESUME</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-contentContainer">
              <div className="m-innerContentContainer">
              <div style={{ height: 50 }}/>
              <div className="m-menuBottomDivider"/>
                { this.state.navigation === 1 ? <Pages.Work/> : null }
                { this.state.navigation === 2 ? <Pages.About/> : null }
                { this.state.navigation === 3 ? null : null }
              <div className="m-menuBottomDivider"/>
              <div style={{ height: 40 }}/>
              <div className="linkContainer">
                <img src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_22,h_22,al_c,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.png"/>
              </div>
              <div style={{ height: 150 }}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

/*
<button className="m-menuButton" name="work" onClick={ this.handleNavigation }><span className="m-name">CELINE</span></button>
<button className="m-menuButton" name="work" onClick={ this.handleNavigation }><span className="m-name">CANUTO</span></button>
*/
