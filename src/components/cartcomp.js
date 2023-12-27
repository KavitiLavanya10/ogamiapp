import "../styles/cartcomp.css";
import Grid from '@mui/material/Grid';
import Navbar from  "./navbar"
import {Link} from "react-router-dom"
import {ogamireactbaseurl} from "../utils/api"
// import  from "axios";
import {AiTwotoneHome} from "react-icons/ai"
import { deleteProduct, removeFromCart } from "../utils/cart";
// import { Addtocart,deleteCart,deleteProduct } from "../utils/cart";

import {Addtocart,deleteCart} from "../utils/cart";




export default function Cartcomp(props) {
    return(
        <div className="cartpage_section">
             
             <Navbar/>
             <div className="cartpage-containermain" >  
             <div className="cartpage_links">
             <Link to={"/"}><AiTwotoneHome/>Home</Link>
             <Link to={"/"}>Shop</Link>
             <p className="para3">Shopping cart</p>
             </div>
             <div className="cartpage-container">
             <div  class="arrow1">shipping cart  <span className="para" >01</span></div>
                <div  class="arrow2"> checkout <span  className="para" >02</span> </div>
                <div  class="arrow3"> order completed <span  className="para" >03</span></div>
             </div>
             <div >
             <Grid container rowspacing={1} columns={{ xs: 1, sm: 2, md: 13 }}>
             <Grid item xs={3}>
                      Image
             </Grid>
             <Grid item xs={2}>
Product Name
             </Grid>
             <Grid item xs={2}>
Price
             </Grid>
             <Grid item xs={2}>
Quantity
             </Grid>
             <Grid item xs={2}>
Total
             </Grid>
             
             <Grid item xs={1}  onClick={(e)=>props.setCart(deleteCart())}>
X
             </Grid>
       
             </Grid>
     {props?.cart?.products?.map((e,index)=>{
        return(
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 13}} key={index}>

       <Grid item xs={3}>
        <img src={ogamireactbaseurl+""+e.images[0]} />
       </Grid>
       <Grid item xs={2}>
<p>{e.name}</p>
       </Grid>
       <Grid item xs={2}>
        {e?.discount && <p>{e.price - e.discount}</p>}
        {!e?.discount && <p>{e.price}</p>}
       </Grid>
       <Grid item xs={2}>
        {e.productQty}
        <div>

        <span style={{padding:"0.3rem",border:"1px solid #000"}} onClick={()=> props.setCart(removeFromCart(props.cart,e))}>-</span>
            <span style={{padding:"0.3rem",border:"1px solid #000"}} onClick={()=> props.setCart(Addtocart(props.cart,e))}>+</span>
        </div>
       </Grid>

<Grid item xs={2}>
{e?.discount && (
    <p>{((e.price-e.discount)*e.productQty).toFixed(2)}</p>
)}

{!e?.discount && <p>{(e.price*e.productQty).toFixed(2)}</p>}
</Grid>


<Grid item xs={1} onClick={(e)=>props.setCart(deleteProduct(props.cart,e))}>X</Grid>

            </Grid>
        )
     })}
           
    
             </div>
 
             {props?.cart?.totalPrice?.toFixed(2)}  
            </div>
        </div>
    )
}