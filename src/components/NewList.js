import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 마운트 시, 한번만 뉴스 데이터를 불러옴
    const fetchData = async () => {
      //데이터 요청 대기중 상태
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=96d59a106f5f4e1e9dfc8301519b1f25"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      //데이터 요청 완료후 상태
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <ul className="news_list">대기중...</ul>;
  }
  //데이터 배열을 map함수를 사용하여 컴포넌트 배열로 변환 시, "!articles"를 조회하여 해당값이 null이 아닌지 확인
  //아직 데이터가 없을 때 null에는 map 함수가 없기 때문에 렌더링 과정에서 오류가 발생 -> 흰페이지 노출
  if (!articles) {
    return null;
  }
  return (
    <ul className="news_list">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </ul>
  );
};

export default NewsList;
