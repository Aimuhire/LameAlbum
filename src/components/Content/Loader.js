import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LoaderWrapper = styled.div`
  width: 80px;
  height: 80px;
  .lds-ripple {
    display: inline-block;
    position: relative;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

export default class Loader extends Component {
  render() {
    return (
      <Container>
        <LoaderWrapper>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </LoaderWrapper>
      </Container>
    );
  }
}
