// ConfigurationController.js
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="body-container">
              {showLeftNavbar && (
                <div className="sides-bar">
                  <h1 className="heading">Left Navbar Menu</h1>
                  <ul className="ul-items">
                    <li className="left-li-items">
                      <p>Item 1</p>
                      <p>Item 1</p>
                      <p>Item 1</p>
                    </li>
                  </ul>
                </div>
              )}
              {showContent && (
                <div className="middle-bar">
                  <h1 className="heading">Content</h1>
                  <p className="para">Lorem ipsum hh hhg hhh jhj gghg h </p>
                </div>
              )}
              {showRightNavbar && (
                <div className="sides-bar">
                  <h1 className="heading">Right Navbar</h1>

                  <p className="right-li">Ad 1</p>
                  <p className="right-li">Ad 2</p>
                </div>
              )}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body
