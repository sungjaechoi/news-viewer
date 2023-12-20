import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=96d59a106f5f4e1e9dfc8301519b1f25"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  
  if (loading) {
    return <ul className="news_list">대기중...</ul>;
  }

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
