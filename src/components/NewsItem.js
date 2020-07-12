import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  //pass down 받은 article 객체의 key값들을 비구조할당하여 사용!
  const { title, description, url, urlToImage } = article;

  return (
    <div>
      {/* image url 있으면 표시하고 아니면 null이지 뭐 */}
      <NewsItemBlock>
        {urlToImage && (
          <div className="thumbnail">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="thumbnail" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <p>{description}</p>
        </div>
      </NewsItemBlock>
    </div>
  );
};

export default NewsItem;
