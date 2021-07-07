import React, { Component } from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
  padding: 0 10%;
  .no-photos {
    color: white;
    font-size: 2em;
  }
`;

export class Album extends Component {
  render() {
    return (
      <Container>
        {this.props.photos.length ? (
          this.props.photos.map(({ id, title,url, thumbnailUrl }) => (
            <ImageCard key={id} photoThumbnailUrl={thumbnailUrl} photoUrl={url} photoTitle={title} />
          ))
        ) : (
          <div className="no-photos">Nothing to see here</div>
        )}
      </Container>
    );
  }
}
