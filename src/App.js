import React, { Component } from 'react';

import './App.css';

// COMPONENTS
import CardList from './components/card-list/cardList';
import SearchField from './components/search-field/searchField';
import DefaultLoading from './components/loading/loading';

class App extends Component {
  constructor(){
    super();

    this.state = {
      searchMonster: '',
      monsters: [],
      showLoading: false
    }
  }

  // LIFE CYCLE METHODS
  // componentDidMount() --> Renders this Component for the first time
  componentDidMount(){
    this.fetchMonsters()
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  fetchMonsters = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(fakeMonsters => this.setState({ monsters: fakeMonsters }))
    .catch(err => {
      console.log(`An Error occurred while fetching data from JSON placeholder API`);
      console.log(err);
    });
  }

  // CUSTOM COMPONENT METHODS
  handleSearchMonsterField = e => {
    this.setState({ showLoading: true });
    const lastSearchFieldValue = e.target.value;

    setTimeout(() => {
      this.setState({ showLoading: false });

      // if last search field value is equal to the current search field value, then:
      if (lastSearchFieldValue === e.target.value) {
        
        if (e.target.value !== '') {
          // this.setState() is an async function, so in order to check if it was indeed updated
          // use the component life cycle method componentDidUpdate()
          // or even use the second parameter from this.setState(object, callbackFunction) working as a callback function with the final result
          this.setState({ 
            searchMonster: e.target.value, 
            monsters: this.state.monsters.filter(monster => {
              return (monster.name.toLowerCase().includes(e.target.value.toLowerCase()));
          })}, () => {
            console.log('Old callback to see the async result of an setState() method ');
          });

        } else {
          console.log('Fetch monsters..')
          this.fetchMonsters();
        }
      } 
    }, 1000);
  }

  render() {
    return (
      <div className="app">
        {this.state.showLoading === true ? <DefaultLoading/>: null}
        <header>
          <h1 className="title">Monsters Rolodex</h1>
          <SearchField searchHandler={this.handleSearchMonsterField}/>
        </header>
        <CardList monsters={this.state.monsters} />
          {/* <h2>
            This is a <strong>props.children</strong> property. 
            <br/>
            Every JSX inside a component is attached
            to a property called 'children' on <strong>props</strong> object.
          </h2> */}
        {/* </CardList> */}
      </div>
    );
  }
}


export default App;
