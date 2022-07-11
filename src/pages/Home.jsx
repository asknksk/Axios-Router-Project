import React from "react";
import axios from "axios";
import SearchUser from "../components/SearchUser";
import Followers from "../components/Followers";
import { useState, useEffect } from "react";

const Home = () => {
  const [allFollowers, setAllFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getFollowers = async () => {
    const { data } = await axios.get(
      "https://api.github.com/users/asknksk/followers?per_page=100"
    );
    setAllFollowers(data);
    console.log(data);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    getFollowers();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const followersList = allFollowers.filter((follower) =>
    follower.login.includes(search)
  );

  return (
    <div>
      <SearchUser handleChange={handleChange} />
      <Followers followers={{ loading, followersList }} />
    </div>
  );
};

export default Home;
