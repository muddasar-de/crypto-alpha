import React from "react";
import { Typography, Row, Col, Statistic, Divider } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import millify from "millify";
import { Cryptocurrencies, News } from "./";
import { useSelector } from "react-redux";
const { Title } = Typography;
const Home = () => {
  const {
    data,
    // data: {
    //   data: { stats: globalStats },
    // },
    isLoading,
    isFetching,
    error,
    isSuccess,
  } = useGetCryptosQuery(12);
  const globalStats = data?.data?.stats;
  const state = useSelector((state) => state);
  // console.log("state", state?.cryptoNewsApi?.queries?.getCryptoNews);
  if (isLoading) return "Loading...";
  return (
    <>
      <Title>Crypto Currencies</Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Crypto Currencies"
            value={millify(globalStats?.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24 Voulume"
            value={millify(globalStats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats?.totalMarkets)}
          />
        </Col>
        {/* <Col span={12}>
          <Statistic title="Total Currencies" value={5} />
        </Col> */}
      </Row>
      <div className="home-heading-container">
        <Title level={2}>Top 12 Crypto Currencies in the world.</Title>
        <Title level={4}>
          <Link to="/cryptocurrencies">Show more +</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <Divider orientation="left" />
      <div className="home-heading-container">
        <Title level={2}>Latest Crypto News</Title>
        <Title level={4}>
          <Link to="/news">Show more +</Link>
        </Title>
      </div>
      <News simplified />
      <Divider orientation="left" />
    </>
  );
};

export default Home;
