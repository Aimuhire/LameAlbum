import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  input {
    border: none;
    outline: none;
  }
  button {
    border: none;
    background-color: #424242;
    border-radius: 7px;
    padding: 3px 7px;
    transition: background-color 300ms;
    color: white;
  }
  button:hover {
    background-color: tomato;
    color: white;
  }
  button:active {
    background-color: gray;
    color: white;
  }
  button:disabled {
    background-color: #424242;
  }
  /* hides the up-down arrows on input */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const SearchWrapper = styled.div`
  background-color: white;
  padding: 7px;
  border-radius: 7px;
`;

export class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      albumID: "",
    };
  }

  handleKeyDown(event) {
    if (event.key === "Enter") {
      this.fetchAlbumItems(this.state.albumID);
    }
  }

  handleIDChange({ target }) {
    if (target.value < 1) {
      this.setState({ albumID: "" });
    } else {
      this.setState({ albumID: Number(target.value) });
    }
  }

  fetchAlbumItems() {
    this.props.onChangeAlbum(this.state.albumID);
  }

  render() {
    return (
      <Container>
        <SearchWrapper>
          <input
            onChange={this.handleIDChange.bind(this)}
            value={this.state.albumID}
            placeholder="Album ID goes here..."
            type="number"
            min="1"
            onKeyDown={this.handleKeyDown.bind(this)}
          />
          <button
            disabled={!this.state.albumID}
            onClick={this.fetchAlbumItems.bind(this)}
          >
            Get Album Photos By ID
          </button>
        </SearchWrapper>
      </Container>
    );
  }
}
