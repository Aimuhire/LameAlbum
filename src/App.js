import React, { Component } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SearchBar } from "./components/Content/SearchBar";
import { Album } from "./components/Content/Album";
import { changeAlbum } from "./redux/actions/album/changeAlbum.action";
import { connect } from "react-redux";
import styled from "styled-components";

const Content = styled.div`
  min-height: calc(100vh - 260px);
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content>
          <SearchBar onChangeAlbum={this.props.changeAlbum} />
          <Album album={this.props.album} showLoader={this.props.showLoader} />
        </Content>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    album: state.albumReducer,
    showLoader: state.loaderReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeAlbum: (albumID, showLoader) => {
      dispatch(changeAlbum(albumID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
