import {Component} from 'react'
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Artists from './artists.js'
import FilterComponent from './FilterComponent.js'
import Lineup from './Lineup.js'


class App extends Component {
  constructor(props) {
    super(props);

    this.addAggrigator = this.addAggrigator.bind(this)
    this.removeAggrigator = this.removeAggrigator.bind(this)

    this.state = {
      artists: Artists.artists,
      aggrigator: new Set(),
      totalCost: 0,
      totalPopularity: 0
    };
  }

  addAggrigator = item => {
    console.log(item)
    if (this.state.aggrigator.size < 6) {
      this.setState({
        totalCost: this.state.aggrigator.has(item) ? this.state.totalCost : this.state.totalCost + item.cost,
        totalPopularity: this.state.aggrigator.has(item) ? this.state.totalPopularity : this.state.totalPopularity + item.popularity,
        aggrigator: this.state.aggrigator.add(item)
      })
      console.log(this.state.aggrigator)
      console.log(this.state.totalCost)
      console.log(this.state.totalPopularity)
    }
  }

  removeAggrigator = item => {
    console.log(item)
    this.state.aggrigator.delete(item)
    this.setState({
        aggrigator: this.state.aggrigator,
        totalCost: this.state.totalCost !== 0 ? this.state.totalCost - item.cost : this.state.totalCost,
        totalPopularity: this.state.totalPopularity !== 0 ? this.state.totalPopularity - item.popularity : this.state.totalPopularity
    })
    console.log(this.state.aggrigator)
  }

  render() {
    return (
      <div bg="dark" variant="dark" className="bg-dark">
      <h1 className="text-light p-3">
        Spring Weekend Lineup Generator
      </h1>
      <Container fluid>
        <Row>
          <Col>
            <FilterComponent list={this.state.artists}
                             addAggrigator={this.addAggrigator}/>
          </Col>
          <Col xs={5} md={5} xl={5}>
            <Lineup removeAggrigator={this.removeAggrigator}
                    aggrigator={this.state.aggrigator}
                    totalCost={this.state.totalCost}
                    totalPopularity={this.state.totalPopularity}/>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
