
import Card from "./card";
import {AiOutlineHeart,AiOutlineEye} from "react-icons/ai";
import {BsBag} from "react-icons/bs";
import {BiShuffle} from "react-icons/bi";
import {Addtocart} from "../utils/cart";
import "../styles/featuredproduct.css"

const Featuredproduct=(props)=>{
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
            <div className="features-list" >
            {props?.data?.slice(0,6).map((e,index)=>{
                return(
                    <Card key={index}product={e}>
                        <div className="productcard-container">
                            <AiOutlineHeart   className="icons"/>
                            <BsBag className="icons" onClick={()=>props.setcount(Addtocart(props.cart,e))}/>
                            <BiShuffle className="icons"/>
                            <AiOutlineEye className="icons"/>
                        </div>
                    </Card>
                )
            })}
        </div>
        </div>
    )
};
 export default Featuredproduct;