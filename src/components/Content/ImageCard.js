import React, { Component } from "react";
import styled from "styled-components";
import Image, { Shimmer } from "react-shimmer";

const Container = styled.a`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 150px;
  margin: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: #171717;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  &:active {
    color: gray;
  }
  .image-container {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 150px;
    overflow: hidden;
  }
`;

const TitleWrapper = styled.div`
  padding: 5px;
  text-align: center;
`;
class ImageCard extends Component {
  render() {
    return (
      <Container href={this.props.photoUrl} target="_blank">
        <div className="image-container">
          <Image
            src={this.props.photoThumbnailUrl}
            fallback={<Shimmer width={150} height={150} />}
          />
        </div>
        <TitleWrapper>{this.props.photoTitle}</TitleWrapper>
      </Container>
    );
  }
}

export default ImageCard;
