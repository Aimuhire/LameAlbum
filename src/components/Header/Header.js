import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  margin: 50px 0;

  color: whitesmoke;

  .brand-name {
    font-size: 2em;
  }
  .product {
    font-size: 1em;
    color: tomato;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
`;

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="brand-name">LameGram</div>
          <div className="product">[ Album ]</div>
        </Container>
      </React.Fragment>
    );
  }
}
