const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = ({ onSelect, category }) => {

  return (
    <ul className="navication">
      {categories.map((c) => (
        <li
          className={`nav_item${category === c.name ? ' active' : '' }`}
          key={c.name}
          active={category === c.name}
          onClick={(e) => {
            onSelect(c.name)
          }}
        >
          {c.text}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
