import Cards from "../components/card2";
import {AiOutlineHeart,AiOutlineEye} from "react-icons/ai";
import {BsBag} from "react-icons/bs";
import {BiShuffle} from "react-icons/bi";
import "../styles/newproducts.css";

const Newproducts=(props)=>{
    
    return (
        <div className="featured2_productlist">
            <h1 className="featureproduct2_head1">New Products </h1>
            
        <div className="features2-list" >
            
            {props?.data?.map((e,index)=>{
                return (
                    <Cards key={index}product={e}>
                    
                    </Cards>
                );
            })}
        </div>
        </div>
    );
}; 
 export default Newproducts;