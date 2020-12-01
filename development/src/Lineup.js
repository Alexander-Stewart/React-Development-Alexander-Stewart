import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Lineup extends Component {
  constructor(props) {
    super(props);

    this.crowdApproval = this.crowdApproval.bind(this)
    this.artistsInLineup = this.artistsInLineup.bind(this)
    this.saveLineup = this.saveLineup.bind(this)
    this.removeSavedLineup = this.removeSavedLineup.bind(this)

    this.state = {
      savedLineups: []
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log("currentProps: " + this.props.aggrigator + ", " + this.props.totalCost + ", " + this.props.totalPopularity)
    console.log("prevProps: " + prevProps.aggrigator + ", " + prevProps.totalCost + ", " + prevProps.totalPopularity)
    if(prevProps !== this.props) {  }
  }

  crowdApproval = () => {
    console.log("called")
    return this.props.aggrigator.size === 0 ? 0 : this.props.totalPopularity / this.props.aggrigator.size
  }

  artistsInLineup = () => {
    console.log("called")
    return this.props.aggrigator.size
  }

  saveLineup = (lineup, cost, popularity) => {
    console.log("Saving lineup")
    var savingLineup = new Set(lineup)
    console.log(lineup)
    console.log(cost)
    console.log(popularity)
    var newSavedLineups = this.state.savedLineups
    newSavedLineups.push([savingLineup, cost, popularity])
    this.setState({
		    savedLineups: newSavedLineups
	  })
  }

  removeSavedLineup = (index) => {
    console.log("removing saved lineup...")
    var updateSavedLineups = this.state.savedLineups
    delete updateSavedLineups[index]
    this.setState({
      savedLineups: updateSavedLineups
    })
  }

  render() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            Your Lineup
          </Navbar.Brand>
        </Navbar>

        <CardColumns>
          {[...this.props.aggrigator].map(item =>
            <Card key={item.artistName} className="w-100">
              <Card.Header as="h5">
                {item.artistName}
              </Card.Header>
              <Card.Body>
                <Card.Img src={item.img} fluid/>
              </Card.Body>
              <Card.Footer>
              <Container className="text-center">
                <Row>
                  <Col>
                    ${item.cost}
                  </Col>
                  <Col>
                    <Button variant="danger" onClick={() => this.props.removeAggrigator(item)}>Remove</Button>
                  </Col>
                </Row>
              </Container>
              </Card.Footer>
            </Card>
          )}
        </CardColumns>

        <Container fluid className="text-center bg-dark text-light h-100">
          <Row>
            <Col>
              Total Cost: ${this.props.totalCost}
            </Col>
            <Col>
              Artists in Lineup: {this.artistsInLineup()}/6
            </Col>
            <Col>
              Crowd Approval: {this.crowdApproval()}%
            </Col>
            <Col>
              <Button variant="success" onClick={() => this.saveLineup(this.props.aggrigator, this.props.totalCost, this.props.totalPopularity)}>Save Lineup</Button>
            </Col>
          </Row>
        </Container>

        <CardColumns>
          {this.state.savedLineups.map((item, index) =>
          <Card key={index}>
            <Card.Header as="h5" className="text-center">
              Saved Lineup {index}
            </Card.Header>
            <div className="d-flex justify-content-around">
              <Button variant="primary" onClick={() => this.props.openSavedLineup(item[0], item[1], item[2])}>Open</Button>
              <Button variant="danger" onClick={() => this.removeSavedLineup(index)}>Remove</Button>
            </div>
          </Card>)}
        </CardColumns>
      </div>
    );
  }
}

export default Lineup
