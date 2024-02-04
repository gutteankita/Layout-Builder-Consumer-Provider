import {Component} from 'react'
import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'
import ConfigurationContext from './context/ConfigurationContext'
import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  toggleShowContent = () => {
    this.setState(prev => ({
      showContent: !prev.showContent,
    }))
  }

  toggleShowLeftNavbar = () => {
    this.setState(prev => ({
      showLeftNavbar: !prev.showLeftNavbar,
    }))
  }

  toggleShowRightNavbar = () => {
    this.setState(prev => ({
      showRightNavbar: !prev.showRightNavbar,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.toggleShowContent,
          onToggleShowLeftNavbar: this.toggleShowLeftNavbar,
          onToggleShowRightNavbar: this.toggleShowRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
