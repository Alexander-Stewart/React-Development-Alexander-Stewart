import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'

class DisplayList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div>
        <CardColumns>
          {this.props.list.map(item =>
            <Card key={item.artistName}>
              <Card.Img variant="top" src={item.img}/>
              <Card.Body>
                <Card.Title as="h3">{item.artistName}</Card.Title>
                <Card.Subtitle as="h5">{"$" + item.cost}</Card.Subtitle>
                <Card.Text as="h5">{item.genre}</Card.Text>
                <Card.Text>
                  {item.desc}
                </Card.Text>
                <Button variant="primary" onClick={() => this.props.addAggrigator(item)}>Add</Button>
              </Card.Body>
            </Card>
          )}
        </CardColumns>
      </div>
    );
  }
}

export default DisplayList
