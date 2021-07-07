import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: gray;
  padding: 30px 0;
  text-align: center;
  font-family: monospace;

  span {
    background-color: #3f86f3;
    color: white;
    padding: 1px;
    border-radius: 3px;
    cursor: grab;
  }

  a {
    color: #3f86f3;
  }

  a:hover {
    color: #171717;
  }

  a:active {
    color: white;
    background-color: #3f86f3;
  }
  span a {
    color: white;
    text-decoration: none;
  }
  span {
    margin: 4px;
  }
  div {
    margin: 3px 0;
  }
`;

export class Footer extends Component {
  constructor() {
    super();
    this.state = {
      thisYear: String(new Date().getFullYear()).replace("0", "💛"),
    };
  }
  render() {
    return (
      <Container>
        <div>
          {" "}
          ©️{" "}
          <a
            href="https://twitter.com/aimuhire"
            rel="noreferrer"
            target="_blank"
          >
            @aimuhire
          </a>
          {"  - "}
          {this.state.thisYear}
        </div>
        <div>
          Originally designed for a challenge by {" "}
          <a
            href="https://twitter.com/nellysugu"
            rel="noreferrer"
            target="_blank"
          >
            @nellysugu
          </a>
        </div>
        <div>
          <span title="ReactJs">#ReactJs</span>
          <span title="React Redux">#ReactRedux</span>
          <span>
            <a
              href="https://github.com/aimuhire/lamealbum"
              rel="noreferrer"
              target="_blank"
            >
              View on Github
            </a>
          </span>
        </div>
      </Container>
    );
  }
}
