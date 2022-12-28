import React from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
const News = () => {
  const { data: newsList } = useGetCryptoNewsQuery({
    newsCatagory: "Cryptocurrency",
    count: 12,
  });
  console.log("news", newsList);
  return <div>News</div>;
};

export default News;
