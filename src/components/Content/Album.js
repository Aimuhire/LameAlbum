import React, { Component } from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";
import Loader from "./Loader";

const Container = styled.div`
  margin: 50px 0;
  padding: 0 10%;
  .no-photos {
    color: white;
    font-size: 1.2em;
  }
  .album-title {
    text-align: center;
    color: white;
    margin: 30px 0;
  }
  /* Responsive Design */
  @media only screen and (max-width: 768px) {
    padding: 0;
    .no-photos {
      padding: 0 10%;
    }
  }
`;
const AlbumWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export class Album extends Component {
  render() {
    return (
      <Container>
        <>
          {this.props.showLoader ? (
            <Loader />
          ) : this.props.album.albumID ? (
            <>
              <div className="album-title">
                Photos for album: {this.props.album.albumID}
              </div>
              {this.props.album.albumPhotos.length ? (
                <AlbumWrapper>
                  {this.props.album.albumPhotos.map(
                    ({ id, title, url, thumbnailUrl }) => (
                      <ImageCard
                        key={id}
                        photoThumbnailUrl={thumbnailUrl}
                        photoUrl={url}
                        photoTitle={title}
                      />
                    )
                  )}
                </AlbumWrapper>
              ) : (
                <div className="no-photos">Album has no photos</div>
              )}
            </>
          ) : (
            <div className="no-photos">Please choose an album above</div>
          )}
        </>
      </Container>
    );
  }
}
