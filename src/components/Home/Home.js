import React, { useEffect, useState } from "react";
import "./Home.css";
import { FavouriteIcon } from "../../SVG/svg";
import { IncrementIcon } from "../../SVG/svg";
import { DecrementIcon } from "../../SVG/svg";
import ReactPaginate from "react-paginate";
import { Modal, Button } from "react-bootstrap";
import { useMedia } from 'react-use';

export default function Home() {
  const [data, setData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({});
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const isMobile = useMedia('(max-width: 599px)');

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d"
    )
      .then((response) => response.json())
      .then((res) => {
        //console.log(data);
        setData(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const handleRowClick = (id) => {
    setIsPopupOpen(true);
    setPopupData(data.filter((i) => i.id === id));
  };

  console.log(popupData);
  return (
    <div>
      <h5>Top 100 Cryptocurrencies by Market Cap</h5>
      <div className="sub-headings">
        <div className="left-headings">
          <span>Favourites</span>
          <span style={{ color: "blue" }}>CryptoCurrencies</span>
          <span>DeFi</span>
          <span>NFTs & Collectibles</span>
        </div>
        <div className="right-heading">
          <span>show rows</span>
          <select>
            <option>100</option>
          </select>
        </div>
      </div>
      <table className="main-table">
        <thead >
          <tr style={{ height: "2rem" }}>
            <th className="favourite-icon"></th>
            <th className="index">#</th>
            <th className="name" style={{ }}>
              NAME
            </th>
            <th className="price">PRICE</th>
            <th className="h24" style={{textAlign: 'center'}}>24H</th>
            <th className="d7"  style={{textAlign: 'center'}}>7D</th>
            <th className="market-cap">MARKET CAP</th>
            <th className="volume">VOLUME(24H)</th>
            <th className="circulating-supply">CIRCULATING SUPPLY</th>
            <th className="more"></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, i) => {
            return (
              <tr
                style={{ height: "3rem", fontSize: "14px", color: "#222531" }}
                onClick={isMobile ? () => handleRowClick(`${item.id}`) : null}
                key={item.id}
              >
                <td>
                  <FavouriteIcon />
                </td>
                <td style={{ color: "#808A9D" }}>{i + 1}</td>
                <td>
                  <img src={item.image} alt="" style={{ width: "8%" , height: '1.2rem' }} />{" "}
                  {item.name}{" "}
                  <span style={{ color: "#808A9D" }}>
                    {item.symbol.toUpperCase()}
                  </span>
                </td>
                <td>${item.current_price}</td>
                <td className="h24" style={{ color: "red" }}>
                  <DecrementIcon />{" "}
                  {(
                    Math.round(item.price_change_percentage_24h * 100) / 100
                  ).toFixed(2)}
                  %
                </td>
                <td className="d7" style={{ color: "green" }}>
                  <IncrementIcon />{" "}
                  {(
                    Math.round(
                      item.price_change_percentage_7d_in_currency * 100
                    ) / 100
                  ).toFixed(2)}
                  %
                </td>
                <td className="market-cap">${item.market_cap}</td>
                <td className="volume">${item.total_volume}</td>
                <td className="circulating-supply">
                  {item.circulating_supply} BTC{" "}
                </td>
                <td className="more">:</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {isPopupOpen && (
        <>
          {popupData.map((i) => {
            return (
              <Modal show={isPopupOpen} key={i.id}>
                <Modal.Header onClick={handleRowClick}>
                  <Modal.Title>
                    <img src={i.image} alt=" " style={{ width: "10%" }} />{" "}
                    {i.name}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>PRICE</th>
                          <th style={{textAlign: 'center'}}>24H</th>
                          <th style={{textAlign: 'center'}}>7D</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            $
                            {(Math.round(i.current_price * 100) / 100).toFixed(
                              2
                            )}
                          </td>
                          <td style={{ color: "red" }}>
                            <DecrementIcon />{" "}
                            {(
                              Math.round(i.price_change_percentage_24h * 100) /
                              100
                            ).toFixed(2)}
                            %
                          </td>
                          <td style={{ color: "green" }}>
                            <IncrementIcon />{" "}
                            {(
                              Math.round(
                                i.price_change_percentage_7d_in_currency * 100
                              ) / 100
                            ).toFixed(2)}
                            %
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{marginTop: '1rem'}}>
                      <div style={{fontSize: '14px', fontWeight: 500}}>MARKET CAP</div>
                      {/* <br /> */}
                      <div style={{fontSize: '13px', fontWeight: 400, color: '#808A9D'}}>${i.market_cap}</div>
                    </div>
                    <div style={{marginTop: '1rem'}}>
                      <div style={{fontSize: '14px', fontWeight: 500}}>VOLUME(24H)</div>
                      {/* <br /> */}
                      <div style={{fontSize: '13px', fontWeight: 400, color: '#808A9D'}}>${i.total_volume}</div>
                    </div>
                    <div style={{marginTop: '1rem'}}>
                      <div style={{fontSize: '14px', fontWeight: 500}}>CIRCULATING SUPPLY</div>
                      {/* <br /> */}
                      <div style={{fontSize: '13px', fontWeight: 400, color: '#808A9D'}}>${i.circulating_supply}BTC</div> 
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="danger"
                    onClick={() => setIsPopupOpen(false)}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            );
          })}
        </>
      )}

      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
}
