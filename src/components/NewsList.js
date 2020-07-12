import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-height: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

//방법2. 외부에 custom hooks만들어서 상태관리하기.
const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const API_KEY = "7e1d4960f82d441fbb2687510a1f51a6";
    const query = category === "all" ? "" : `&category=${category}`;
    const URL = `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`;
    return axios.get(URL);
  }, [category]);

  //대기중일 때
  if (loading) {
    return <NewsListBlock>대기중</NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  //response 값이 유효할 떄
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  );
};

//방법1. 상태관리 컴포넌트에서 직접하기
// const NewsList = ({ category }) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     //getData() : async를 사용하는 함수 따로 선언
//     const getData = async () => {
//       //
//       setLoading(true);
//       try {
//         const API_KEY = "7e1d4960f82d441fbb2687510a1f51a6";
//         const query = category === "all" ? "" : `&category=${category}`;
//         const URL = `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`;
//         const response = await axios.get(URL);
//         setArticles(response.data.articles);
//         console.log(category);
//       } catch (err) {
//         console.error(err);
//       }
//       setLoading(false);
//     };
//     //함수 호출
//     getData();
//   }, [category]); //category 변하면 다시 호출

//   //대기중일 때
//   if (loading === true) {
//     return (
//       <NewsListBlock>
//         <h2>대기 중...</h2>
//       </NewsListBlock>
//     );
//   }
//   //아직 articles 값이 설정되지 않았을 때
//   if (!articles) {
//     return null;
//   }

//   //articles 값이 유효할 때
//   return (
//     <div>
//       <NewsListBlock>
//         {articles.map((article) => (
//           <NewsItem article={article} key={article.url} />
//         ))}
//       </NewsListBlock>
//     </div>
//   );
// };

export default NewsList;
