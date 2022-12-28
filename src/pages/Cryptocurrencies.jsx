import React from "react";
import { Row, Col, Card, Input } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState } from "react";
import "../App.css";
import millify from "millify";
import { useEffect } from "react";
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const {
    data: cryptoList,
    // data: {
    //   data: { stats: globalStats },
    // },
    isLoading,
    isFetching,
    error,
    isSuccess,
  } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  const [serachedTerm, setSearchedTerm] = useState("");
  useEffect(() => {
    let filteredValues = cryptoList?.data?.coins?.filter((item) =>
      item.name.toLowerCase().includes(serachedTerm.toLowerCase())
    );
    setCryptos(filteredValues);
  }, [serachedTerm]);

  if (isLoading) return "Loading...";

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crypto"
            onChange={(e) => setSearchedTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => {
          return (
            <Col
              key={currency?.id}
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
            >
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency?.name}`}
                  extra={
                    <img className="crypto-image" src={currency.iconUrl} />
                  }
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
