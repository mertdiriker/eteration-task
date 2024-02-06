import './App.css';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from './pages/Home';
import Header from './Layouts/Header';
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from './slicers/productSlice';
function App() {

  const product =useSelector(state => state.product)
  const dispatch = useDispatch()
  const getProducts = () => {
        axios.get("https://5fc9346b2af77700165ae514.mockapi.io/products",{
            headers: {
            }
        }).then((res)=>{
            dispatch(setProducts(res.data))
            console.log(res);
        })
        .catch((err)=>{
            if (err?.response?.status == 400) {
                console.log(err)
            }
        })
    }
    useEffect(()=>{
        getProducts()
    },[])

  return (
      <>
      <Header></Header>
      <BrowserRouter>
        <Switch>
            <Route path="/" element={<Home />} />
        </Switch>
      </BrowserRouter>
      </>
  );
}

export default App;
