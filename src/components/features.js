import Card from "./card";

import {AiOutlineHeart,AiOutlineEye,AiFillHeart} from "react-icons/ai";
import {BsBag} from "react-icons/bs";
import {BiShuffle} from "react-icons/bi";
import "../styles/features.css";
import {Addtocart} from "../utils/cart";
import {Link} from "react-router-dom"
import Modal from "./modal"
import {useRef,useState} from "react"
import {ogamireactbaseurl} from "../utils/api"
const Features = (props)=>{
    const handlewishlist=(product)=>{
        const findIndex=props.wishlist.findIndex((e)=>e.id==product.id);
        if(findIndex==-1)
        return[...props.wishlist,product];
    else return props.wishlist.filter(e=>e.id !== product.id)
    };

    const [open,setOpen] = useState(false);
    const [open1,setOpen1] = useState(false);
    const [product,setProduct] = useState(null);
    return(
        <div className="featured_productlist">
             <h1 className="featureproduct_head1">Featured Product</h1>
             <div className="feature_producttags">
                <span className="listtagname">All</span>
                 <span className="listtagname">Bread</span>
                 <span className="listtagname">Fastfood</span>
                 <span className="listtagname">Fresh Meat</span>
                <span className="listtagname">Ocean Foods</span>
                 <span className="listtagname">Oranges</span>
            </div>
            <Link to={"/"}></Link>
            <Link to={"/signup"}>Signup</Link>
            <div className="features-list" >
            {props?.data?.map((e,index)=>{
                const productIndex=props.wishlist.findIndex((product)=>e.id==product.id)
                return(
                    <Card key={index}product={e}>

                        <div className="productcard-container">
                            {productIndex==-1 ? <AiOutlineHeart className="icons"
                             onClick={()=>props.setwishlist(handlewishlist(e))}/> : <AiFillHeart style={{color:"red"}}
                              className="icons" onClick={()=>props.setwishlist(handlewishlist(e))} />}

                            {/* <AiOutlineHeart   className="icons"/> */}

                            <BsBag className="icons" onClick={()=>props.setcount(Addtocart(props.cart,e))}/>
                            <BiShuffle className="icons" onClick={()=>setOpen1(true)}/>
                            <AiOutlineEye className="icons"
                             onClick={()=>{
                                setProduct(e);
                                setOpen(true)
                             }} />
                        </div>
                    </Card>
                );
            })}
        </div>
        {/* {open && <Modal open={open} setOpen={setOpen} product={product} />} */}

{open && (
<Modal  open={open} setOpen={setOpen}>
     <div className="modal2">
     <img src={ogamireactbaseurl + product?.coverImage} />
    <p>{product?.name}</p>
    <button onClick={()=> setOpen(false)}>close</button>
     </div>
</Modal>

)
}

{open1 && (
<Modal open={open1} setOpen={setOpen1}>
     
    <div className="modal3">
    <p>comparsions</p>
    <button onClick={()=> setOpen1(false)}>close</button>
    </div>
</Modal>

)
}




        </div>
    )
}


export default Features;
















//  import Card from "./card";
// import {AiOutlineHeart,AiOutlineEye} from "react-icons/ai";
// import {BsBag} from "react-icons/bs";
// import {BiShuffle} from "react-icons/bi";
// import "../styles/features.css";
// import {Addtocart} from "../utils/cart";
// const Features = (props)=>{
//     return(
//         <div className="features-container">
//             {props?.data?.map((e,index)=>{
//                 return(
//                     <Card key={index}product={e}>
//                         <div className="features-icons-div">
//                             <AiOutlineHeart className="icons"/>
//                             <BsBag className="icons" onClick={()=>props.setcount(Addtocart(props.cart,e))}/>
//                             <BiShuffle className="icons"/>
//                             <AiOutlineEye className="icons"/>
//                         </div>
//                     </Card>
//                 )
//             })}
//         </div>
//     )
// }


// export default Features;
