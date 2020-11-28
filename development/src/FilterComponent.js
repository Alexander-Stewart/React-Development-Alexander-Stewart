import React, {Component} from 'react'
import MyNavBar from './MyNavBar.js'
import DisplayList from './DisplayList.js'

class FilterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: "All", // All, rnb, pop, country, rap, alt. latin
      price: "All", // All, $, $$$
      sortedList: [...this.props.list]
    };

    this.onSelectFilterGenre = this.onSelectFilterGenre.bind(this)
    this.onSelectFilterPrice = this.onSelectFilterPrice.bind(this)
    this.matchesFilterGenre = this.matchesFilterGenre.bind(this)
    this.matchesFilterPrice = this.matchesFilterPrice.bind(this)
    this.matchesFilters = this.matchesFilters.bind(this)
    this.onSortChange = this.onSortChange.bind(this)
    this.compareCostUp = this.compareCostUp.bind(this)
    this.compareCostDown = this.compareCostDown.bind(this)
  }

  onSelectFilterGenre = event => {
    console.log("genre filter activated: " + event)
    this.setState({
		    genre: event
	  })
  }

  onSelectFilterPrice = event => {
    console.log("price filter activated: " + event)
    this.setState({
		    price: event
	  })
  }

  matchesFilterGenre = item => {
  	// all items should be shown when no filter is selected
  	return this.state.genre === "All" || this.state.genre === item.genre
  }

  matchesFilterPrice = item => {
  	// all items should be shown when no filter is selected
  	return this.state.price === "All" || this.state.price === item.simplePrice
  }

  matchesFilters = item => {
    return this.matchesFilterGenre(item) && this.matchesFilterPrice(item)
  }

  onSortChange = event => {
    console.log("sorting: " + event)
    if(event === "up") {
      console.log("sorting up")
      let newList = [...this.props.list]
      this.setState({
  		    sortedList: newList.sort(this.compareCostUp)
  	  })
    } else if(event === "down") {
      console.log("sorting down")
      let newList = [...this.props.list]
      this.setState({
  		    sortedList: newList.sort(this.compareCostDown)
  	  })
    } else {
      console.log("sorting default")
      this.setState({
  		    sortedList: [...this.props.list]
  	  })
    }
    console.log(this.state.sortedList)
  }

  compareCostUp = (a, b) => {
    return a.cost - b.cost
  }

  compareCostDown = (a, b) => {
    return b.cost - a.cost
  }


  render() {
    return(
      <div>
      <MyNavBar filterGenre={this.onSelectFilterGenre}
                filterPrice={this.onSelectFilterPrice}
                sort={this.onSortChange}/>
      <DisplayList list={this.state.sortedList.filter(this.matchesFilters)}
                   addAggrigator={this.props.addAggrigator}/>
      </div>
    );
  }
}

export default FilterComponent
