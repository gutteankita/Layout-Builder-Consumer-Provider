// ConfigurationController.js
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value
          const onChangeContent = event => {
            onToggleShowContent(event.target.checked)
          }
          const onChangeLeft = event => {
            onToggleShowLeftNavbar(event.target.checked)
          }
          const onChangeRight = event => {
            onToggleShowRightNavbar(event.target.checked)
          }
          return (
            <div className="configuration-contoller-container">
              <h1 className="configuration-contoller-heading">Layout</h1>
              <div>
                <input
                  type="checkbox"
                  className="input"
                  id="context"
                  checked={showContent}
                  onChange={onChangeContent}
                />
                <label className="label" htmlFor="context">
                  Content
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="input"
                  id="leftNavbar"
                  checked={showLeftNavbar}
                  onChange={onChangeLeft}
                />
                <label className="label" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="input"
                  id="rightNavbar"
                  checked={showRightNavbar}
                  onChange={onChangeRight}
                />
                <label className="label" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
