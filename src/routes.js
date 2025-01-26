import Home from "./Pages/Home/Home"
import Users from "./Pages/Users/Users"
import Products from "./Pages/Products/Products"
import Product from "./Pages/Product/Product"

let routes = [
    {path : "/" , element : <Home/>} ,
    {path : "/users" , element : <Users/>} ,
    {path : "/products" , element : <Products/>} ,
    {path : "/product/:productID" , element : <Product/>} ,
]

export default routes