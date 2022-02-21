import "../App.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/actions";
import axios from "axios";

export const Home = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fast-reef-22226.herokuapp.com/data")
      .then((res) => dispatch(addData(res.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="google_div">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
        alt=""
      />
      <br />
      <input
        type="text"
        className="search-box"
        placeholder="search goolge"
        onKeyPress={(e) => {
          if (e.code === "Enter") {
            navigate(`/search?q=${e.target.value}`);
          }
        }}
      />
    </div>
  );
};
