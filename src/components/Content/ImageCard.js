import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.a`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 200px;
  margin: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: #171717;
  &:active {
    color: gray;
  }
`;
const ImageContainer = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
const TitleWrapper = styled.div`
  padding: 5px;
  text-align: center;
`;
class ImageCard extends Component {
  render() {
    return (
      <Container href={this.props.photoUrl} target="_blank">
        <ImageContainer src={this.props.photoThumbnailUrl} />
        <TitleWrapper>{this.props.photoTitle}</TitleWrapper>
      </Container>
    );
  }
}

export default ImageCard;
