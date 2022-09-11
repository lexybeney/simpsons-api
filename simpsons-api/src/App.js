import React, { Component } from "react";
// import Simpsons from "./simpsons.json"; //for backup purposes
import axios from "axios";
import Character from "./components/Character";
import "./App.css";

class App extends Component {
  state = {};
  async componentDidMount() {
    try {
      const apiData = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
      );

      apiData.data.forEach((element, index) => {
        element.id = index;
      });

      this.setState({ apiData: apiData.data });
    } catch (error) {
      console.log("Error with API data");
    }
  }

  onLike = (id) => {
    const index = this.state.apiData.findIndex((item) => {
      return item.id === id;
    });

    const apiData = [...this.state.apiData];
    if (apiData[index].liked === true) {
      apiData[index].liked = false;
    } else {
      apiData[index].liked = true;
    }

    this.setState({ apiData });
  };

  onDelete = (id) => {
    const index = this.state.apiData.findIndex((item) => {
      return item.id === id;
    });

    const apiData = [...this.state.apiData];
    apiData.splice(index, 1);

    this.setState({ apiData });
  };

  onInput = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    const { apiData, searchQuery } = this.state;

    if (!apiData) return <h1>Loading...</h1>;
    let filtered = apiData;

    if (searchQuery) {
      filtered = apiData.filter((character) => {
        return character.character
          .toLowerCase()
          .includes(this.state.searchQuery.toLowerCase());
      });
    }

    return (
      <>
        <input
          onInput={(e) => this.onInput(e.target.value)}
          type="text"
          placeholder="Search for a character"
        />
        {filtered.map((character) => (
          <Character
            key={character.id}
            character={character}
            onDelete={this.onDelete}
            onLike={this.onLike}
          />
        ))}
      </>
    );
  }
}

export default App;
