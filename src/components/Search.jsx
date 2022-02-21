import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";
import { useEffect, useState, useRef } from "react";

export const Search = () => {
  let { search } = useLocation();
  let value = search.slice(3);
  let { data } = useSelector((store) => store);
  console.log("data:", data);
  const [text, setText] = useState([]);
  console.log("text:", text);
  let myRef = useRef();

  useEffect(() => {
    console.log("data", data);
    let x = data.filter((item) => {
      return item.title === search.slice(3);
    });
    console.log(x);
    setText(x);
  }, [data]);

  //   console.log("value:", value);
  return (
    <>
      <div id="navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          alt=""
        />
        <div>
          <input type="text" defaultValue={value} />
          <button className="search">Search</button>
        </div>
      </div>
      <div className="filter_buttons">
        <button id="sort-alphabetically">Sort A-Z</button>
        <button id="sort-alphabetically-desc">Sort Z-A</button>
        <button id="sort-by-date">Sort by Date (Asc)</button>
        <button id="sort-by-date-desc">Sort by Date(Desc)</button>
        <button id="sort-by-quality">Sort by quality(Asc)</button>
        <button id="sort-by-quality-desc">Sort by quality(Desc)</button>
        <button id="filter-explicit">Filter Explicit</button>
      </div>
      <div id="detailed-result">
        {text.map((item, id) => (
          <div key={id}>
            <div className="title">{item.title}</div>
            <div className="desc">{item.description}</div>
            <div className="author">{item.author}</div>
            <div className="creation-date">{item.creation_date}</div>
            <div className="explicit">{item.explicit}</div>
            <div className="quality">{item.quality}</div>
          </div>
        ))}
      </div>
    </>
  );
};
