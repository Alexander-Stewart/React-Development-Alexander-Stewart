# Readme

## Organization of components
- App.js
  - FilterComponent
    - MyNavBar
    - DisplayList
  - Lineup

### App.js
App.js is my outer most component. This is where I hold my master artist list,
as well as where my aggrigator is held. Any methods that update the state of
the artist list or aggrigator are passed down to children components.

### FilterComponent
This component holds all of my filtering logic. This component accepts the list
of artists and the aggrigator as props. Inside this component, all sorting logic
is happening within this component. A stateful sorted list of the artists is
contained in this component, and is passed to the DisplayList component to be
rendered.

### DisplayList
This component handles rendering the list of sorted artists by mapping information
found for each artist within bootstrap's Card component. Using the List mapping
function with javascript, the cards are dynamically generated based on what
artists are in the list.

### MyNavBar
MyNavBar handles user filter and sorting choices. Filtering and sorting are
broken down into dropdown menus, with each correspoding filtering function passed
to this component through the props.

### Lineup
The Lineup component handles displaying the selected artists the user has chosen
to be in Spring weekend. This accepts the aggrigator as a prop, and handles
saving lineups of artists that the user wants to come back to.


## How data is passed down through components
Data is passed down to child components through props, where the props can be
accessed in the child by calling ***this.props***.

## How the user triggers state changes
The user can trigger state changes through either updating sorting and Filtering
choices, or adding/removing artists from their lineup. Any of these actions will
update the state and re-render the page.
