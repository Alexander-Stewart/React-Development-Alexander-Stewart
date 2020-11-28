import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Lineup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  console.log("currentProps: " + this.props.aggrigator + ", " + this.props.totalCost + ", " + this.props.totalPopularity)
  console.log("prevProps: " + prevProps.aggrigator + ", " + prevProps.totalCost + ", " + prevProps.totalPopularity)
  if(prevProps !== this.props) {  }
}

  render() {
    return(
      <div>
        // need title thing: Your Lineup

        <CardColumns>
          {[...this.props.aggrigator].map(item =>
            <Card key={item.artistName} className="w-100">
              <Card.Header as="h5">
                {item.artistName}
              </Card.Header>
              <Card.Body>
                {item.img}
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

        <Container fluid className="text-center bg-light h-100">
          <Row>
            <Col>
              Total Cost: ${this.props.totalCost}
            </Col>
            <Col>
              Artists in Lineup: {this.props.aggrigator.size}/6
            </Col>
            <Col>
              Crowd Approval: {this.props.aggrigator.size === 0 ? 0 : this.props.totalPopularity / this.props.aggrigator.size}%
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Lineup
