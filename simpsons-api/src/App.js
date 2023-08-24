import React, { Component } from "react";
// import Simpsons from "./simpsons.json"; //for backup purposes
import axios from "axios";
import Character from "./components/Character";
import "./App.css";
import likedIcon from "./assets/liked.svg";

class App extends Component {
  state = {};
  async componentDidMount() {
    this.setState({ likeCount: 0 });

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
      console.log(error);
    }
  }

  constructor() {
    super();
    this.searchBox = React.createRef();
  }

  onLike = (id) => {
    const index = this.state.apiData.findIndex((item) => {
      return item.id === id;
    });

    const apiData = [...this.state.apiData];
    const likeCount = this.state.likeCount;

    if (apiData[index].liked === true) {
      apiData[index].liked = false;
      this.setState({ likeCount: likeCount - 1 });
    } else {
      apiData[index].liked = true;

      this.setState({ likeCount: likeCount + 1 });
    }

    this.setState({ apiData });
  };

  onDelete = (id) => {
    const index = this.state.apiData.findIndex((item) => {
      return item.id === id;
    });

    const likeCount = this.state.likeCount;
    if (this.state.apiData[index].liked === true) {
      this.setState({ likeCount: likeCount - 1 });
    }

    const apiData = [...this.state.apiData];
    apiData.splice(index, 1);

    this.setState({ apiData });
  };

  onInput = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    const { apiData, searchQuery, likeCount } = this.state;

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
        <div className="searchArea">
          <div className="search">
            <input
              onInput={(e) => this.onInput(e.target.value)}
              type="text"
              placeholder="Search for a character"
              ref={this.searchBox}
            />
          </div>
          <div className="likeCount">
            <img className="likedIcon" alt="Like Count" src={likedIcon} />
            <p>{likeCount}</p>
          </div>
        </div>
        <div className="characters">
          {filtered.map((character) => (
            <Character
              key={character.id}
              character={character}
              onDelete={this.onDelete}
              onLike={this.onLike}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
