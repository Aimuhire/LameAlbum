import React, { Component } from "react";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/Content/SearchBar";
import { Album } from "./components/Content/Album";
import { changeAlbum } from "./redux/actions/changeAlbum.action";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar onChangeAlbum={this.props.changeAlbum}/>
        <Album photos={this.props.album} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    album: state.albumReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeAlbum: (albumID) => {
      dispatch(changeAlbum(albumID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
