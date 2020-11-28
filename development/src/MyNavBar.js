import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class MyNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Genre" id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="All" onSelect={this.props.filterGenre}>All</NavDropdown.Item>
              <NavDropdown.Item eventKey="alt" onSelect={this.props.filterGenre}>Alternative</NavDropdown.Item>
              <NavDropdown.Item eventKey="country" onSelect={this.props.filterGenre}>Country</NavDropdown.Item>
              <NavDropdown.Item eventKey="latin" onSelect={this.props.filterGenre}>Latin</NavDropdown.Item>
              <NavDropdown.Item eventKey="pop" onSelect={this.props.filterGenre}>Pop</NavDropdown.Item>
              <NavDropdown.Item eventKey="rap" onSelect={this.props.filterGenre}>Rap</NavDropdown.Item>
              <NavDropdown.Item eventKey="rnb" onSelect={this.props.filterGenre}>RnB</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Price" id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="All" onSelect={this.props.filterPrice}>All</NavDropdown.Item>
              <NavDropdown.Item eventKey="$" onSelect={this.props.filterPrice}>$</NavDropdown.Item>
              <NavDropdown.Item eventKey="$$$" onSelect={this.props.filterPrice}>$$$</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sort By Price" id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="none" onSelect={this.props.sort}>All</NavDropdown.Item>
              <NavDropdown.Item eventKey="up" onSelect={this.props.sort}>Low to High</NavDropdown.Item>
              <NavDropdown.Item eventKey="down" onSelect={this.props.sort}>High to Low</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavBar
