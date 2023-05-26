import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

import { useParams, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import Product from "../Components/Product";
import Paginate from "../Components/Paginate";
import ProductCarousel from "../Components/ProductCarousel";
import Meta from "../Components/Meta";

const HomeScreen = () => {
  let { keyword, pageNumber } = useParams();
  if (!pageNumber) pageNumber = 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} small={12} md={6} large={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
