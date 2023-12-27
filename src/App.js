import './App.css';
import Banner from "./components/banner";
import Body from "./components/body";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import Features from './components/features';
import Bestseller from './components/bestseller';
import Featuredproduct from './components/featuredproduct';
import Newproducts from "./components/newproducts";
// import All from './components/card2';
import Boxesdiv from "./components/boxesdiv";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signin from "./components/signin";
import Signup from "./components/signup";
import ProductDetails from './components/productDetails';
import Cartcomp  from './components/cartcomp';

// import Modal from './components/modal';

const url = "https://ogami-api.vercel.app/api/product";
function App() {
  const [products, setproducts] = useState([])
  const [wishlist,setwishlist]=useState([])
  const [count, setcount] = useState({
    products: [],
    totalPrice: 0
  })
  



  useEffect(() => {
    fetchproducts();
  }, [])

  const fetchproducts = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setproducts(data);
    }
    catch (error) {
      console.log(error)
    }

  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Banner />
          <Body />
          <Features data={products} cart={count} setcount={setcount} wishlist={wishlist} setwishlist={setwishlist}/>
          <Bestseller data={products} />
          <Featuredproduct data={products} />
          <Newproducts data={products} />
          <Boxesdiv data={products} />
          <Footer />
        </div>
      )

    },
    {
      path: "/signin",
      element: <Signin />

    },
    {
      path: "/signup",
      element: <Signup />

    },
    {
      path: "/:productId",
      element:<ProductDetails data={products}/>

    },
    {
      path:"/cart",
      element:<Cartcomp cart={count} setCart={setcount}/>
    }

  ])
  return (
    <div className="App">

      <RouterProvider router={router} />






    </div>
  );
}

export default App;
