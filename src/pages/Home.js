import axios from "axios";
import { useEffect, useState } from "react";
import {Container,Row,Col} from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import ReactPaginate from 'react-paginate';
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import { useSelector } from "react-redux";

const Home = () => {
    const products = useSelector((state) => state.product);
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 12; 
    const pagesVisited = pageNumber * productsPerPage;
    const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage).map((product) => {
        return (
          <Col md={3} key={product.id}>
            <ProductCard product={product}></ProductCard>
          </Col>
        );
      });
    
    const pageCount = Math.ceil(products.length / productsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };
    
    
    return (
        <Container className="mb-5">
            <Row className="mt-4">
                <Col md={2}>
                    <LeftBar></LeftBar>
                </Col>
                <Col md={8}>
                    <Row>{displayProducts}</Row>
                </Col>
                <Col md={2}>
                    <RightBar></RightBar>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center mt-5">
                <Col className="d-flex justify-content-center mb-5">
                    <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'pagination'}
                    previousLinkClassName={'previous'}
                    nextLinkClassName={'next'}
                    disabledClassName={'disabled'}
                    activeClassName={'active'}
                    />
                </Col>
            </Row>
        </Container>
    )
}
export default Home;