import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'
import { Navbar, Nav, NavItem} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Block Explorer</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              <Link to="/" className="pure-menu-link">Home</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/block/12312415" className="pure-menu-link">Block</Link>
            </NavItem>
          </Nav>
        </Navbar>

        {this.props.children}
      </div>
    );
  }
}

export default App
