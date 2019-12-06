import React from "react";
import "./App.css";
import Header from "./components/Header";
import PlayerRankings from "./components/PlayerRankings";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      this.setState({ players: response.data });
    });
  }

  render() {
    return (
      <>
        <Header />
        <PlayerRankings players={this.state.players} />
      </>
    );
  }
}

export default App;
