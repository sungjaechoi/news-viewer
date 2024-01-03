import "../Style.scss"

const NewsItem = ({ article }) => {
  //article객체에서 필요한 정보를 구조분해 할당 => 
  const { title, description, url, urlToImage } = article;
  return (
    <li className="news_item">
      {urlToImage && (
        //urlToImage가 있다면 아래 내용을 렌더링, 없다면 무시
        <div className="tumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="tumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href="url" target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default NewsItem;
