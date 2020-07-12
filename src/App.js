import React, { useState, useCallback } from "react";
import axios from "axios";
// import NewsList from "./components/NewsList";
// import Categories from "./components/Categories";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewPage";

const App = () => {
  //빈 데이터
  // const [data, setData] = useState(null);
  //1. then 활용  API 호출
  // const onClick = () => {
  //   const newsURL = "https://jsonplaceholder.typicode.com/todos/1";
  //   axios.get(newsURL).then((response) => {
  //     setData(response.data);
  //   });
  // };

  //2. async/await 호출 + try &ctach
  // const onClick = async () => {
  //   try {
  //     const API_KEY = "7e1d4960f82d441fbb2687510a1f51a6";
  //     const URL = `http://newsapi.org/v2/top-headlines?country=kr&category&apiKey=${API_KEY}`;
  //     const response = await axios.get(URL);
  //     setData(response.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);

  return (
    // <div>
    /* <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )} */
    /* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />  */
    // </div>
    <Route path="/:category?" component={NewsPage}></Route>
  );
};

export default App;
