import React, { Component } from 'react';
import "./App.css"
import Card from "./Component/Card"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listMovie: [{ id: 0, name: "JOKER", image: "https://images-na.ssl-images-amazon.com/images/I/31J8gN3sRPL.jpg", rating: 5 },
      { id: 1, name: "6 Undergournd", image: "https://i.pinimg.com/736x/78/4f/0c/784f0c2a3a794a58be625aa6eab0e188.jpg", rating: 5 },
      { id: 2, name: "Spider-Man: Far from home", image: "https://images-na.ssl-images-amazon.com/images/I/51UL0SttePL.jpg", rating: 4 }
      ],
      searchInput: '',
      searchStar: 5,

    }
  }

  Search = (e) => {
    this.setState({ searchInput: e.target.value })
  }

  Setstar = (e) => {
    this.setState({ searchStar: e })
  }

  Submit = () => {
    var newitem = { id: Math.random(), name: this.state.name, image: this.state.image, rating: this.state.rating }
    this.setState({
      listMovie: [...this.state.listMovie, newitem]
    })
  }



  render() {
    return (
      <section>
        <div className="footer">
          <div className>
            <input type="text" onChange={(e) => this.Search(e)} />
            <span>Search</span>
          </div>
          <div className="star">
            <span onClick={() => this.Setstar(1)}>★</span>
            <span onClick={() => this.Setstar(2)}>★</span>
            <span onClick={() => this.Setstar(3)}>★</span>
            <span onClick={() => this.Setstar(4)}>★</span>
            <span onClick={() => this.Setstar(5)}>★</span>
          </div>
        </div>
        <div className="movielist">
          <Card listMovie={this.state.listMovie} searchInput={this.state.searchInput} searchStar={this.state.searchStar} />
          </div>
          <div className="addmovie" onClick={() => this.setState({ display: !this.props.display })}>
            <span className="pls">+</span>
          </div>
       

          <div>
            <form className={this.state.display ? "display" : "none"}>
              <span onClick={() => this.setState({ display: !this.state.display })}>X</span>
              <input type="text" placeholder="Movie Name" onChange={(event) => { this.setState({ name: event.target.value }) }} />
              <input type="text" placeholder="Poster URL" onChange={(event) => { this.setState({ image: event.target.value }) }} />
              <input type="number" placeholder="Movie Rating" onChange={(event) => { this.setState({ rating: event.target.value }) }} />
              <span onClick={this.Submit} className="submit">Submit</span>
            </form>
          </div>
        
      </section>



    );
  }
}

export default App;