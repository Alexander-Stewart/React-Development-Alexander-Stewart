import {Component} from 'react'
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Artists from './artists.js'
import FilterComponent from './FilterComponent.js'


class App extends Component {
  constructor(props) {
    super(props);

    this.getDunks = this.getDunks.bind(this)

    this.state = {
      artists: Artists.artists
    };
  }

  getDunks = () => {
    let l = "hi"
    console.log(l)
    console.log(Artists.artists)
  }

  render() {
    return (
      <div>
      we linking
      {this.getDunks()}
      <Container fluid>
        <Row>
          <Col>
            <FilterComponent list={this.state.artists}/>
          </Col>
          <Col xs={5} md={5} xl={5}>
            // this is where aggrigator goes
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
