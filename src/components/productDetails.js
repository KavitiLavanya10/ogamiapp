import React, { useEffect, useState } from 'react'
import Proddetails from '../components/proddetails'
import axios from 'axios'
import {AiFillStar} from 'react-icons/ai'
import Features from '../components/features';
import "../styles/productDetails.css"
import {BsCheckLg} from 'react-icons/bs';
import { useParams } from 'react-router-dom'
import { ogamibaseurl, ogamireactbaseurl } from '../utils/api'
export default function ProductDetails(props) {
    const params = useParams();
    const [pDetails, setpDetails] = useState();
    const[tab,setTab]=useState(0)
    const[img,setImg]=useState(null);
    console.log(params);
    <Features data={props.data}/>
    const fetchData = async () => {
        const { data } = await axios.get(ogamibaseurl + "/api/product?&slug=" + params.productId);
        console.log(data);
        setpDetails(data[0]);
    }
    useEffect(() => {
        fetchData()
    }, [params]
    )




    //******************************************//
    // let[SearchParams,setSearchParams]=useSearchParams();
    // console.log(SearchParams.forEach(e=>console.log(e)));
    // console.log(SearchParams.getAll("k2"));
    //*****************************************/
    return (
        <div>ProductDetails
            <div >
                <Proddetails/>
    <div className="productsdivision">
    
 <div className="productimggdivv">
 {pDetails?.images?.map((e,index) => {
        return(
            <div className="productsimgdiv" key={index} onClick={()=>setImg(e)}>
                <img className="productsimggg" src={ogamireactbaseurl + e} ></img>
                </div>

                
        )

        
    })} 
 </div>

 
 <div className="imggdivv1">
                <img className="imgg1" 
                src={img ? ogamireactbaseurl + img : ogamireactbaseurl+ pDetails?.coverImage}></img>
                
                </div>


<div className="loremdiv">
<div className="categorydiv"><b>{pDetails?.category}</b></div>

<div className="namediv"><b>{pDetails?.name}</b></div>

<div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  </div>
<div className="linked">
    <div className="linkeddiv">SKU: <span className="spaandiv">A1359</span></div>
    <div className="linkeddiv">Categories: <span className="spaandiv">Fastfood</span></div>
    <div className="linkeddiv3">Tag: <span className="spaandiv">Food, Organic</span></div>
</div>


</div>




<div className="pricediv">
<p className="pd-delivery">Free Delivery</p>
<p className={`pd-price ${pDetails?.discount ? "pd-gray-price":"pd-green-price"}`}> ${pDetails?.price}</p>
{pDetails?.discount && (
    <p className="pd-discountPrice pd-green-price">
        ${pDetails?.price-pDetails?.discount}
    </p>
)}


{/* <div className="pricee"><b>${pDetails?.price}</b></div> */}




<div><button className="btn11" type="button">Add to cart</button></div>
<div><button className="btn22" type="button">Add to compare</button></div>
<div><BsCheckLg style={{color:"green"}}/>Satisfaction 100% Guaranteed</div>
<div><BsCheckLg style={{color:"green"}}/>Free shipping on orders over $99</div>
<div><BsCheckLg style={{color:"green"}}/>14 day easy Return</div>

</div>
            
            
    
    
    
    
    </div>



<div className="tabdiv">

    <div className="tabdivv">
        <p className="tabpara" onClick={()=>setTab(0)}>Description</p>
        <p className="tabpara" onClick={()=>setTab(1)}>Specification</p>
        <p className="tabpara" onClick={()=>setTab(2)}>Reviews</p>
    </div>

    {tab==0 && <div className="descdiv">
       <p>{pDetails?.fullDescription}</p> </div>}
    {tab==1 && <div>
        <table className="pd_table">
                <tr className="pb_tr">
                    <td className="pd_quantities">WEIGHT</td>
                    <td className="pb_td">{pDetails?.specifications?.weight}</td>
                </tr>
                <tr className="pb_tr">
                    <td className="pd_quantities">SIZE</td>
                    <td className="pb_td">{pDetails?.specifications?.size}</td>
                </tr>
                <tr className="pb_tr">
                    <td className="pd_quantities">COLOR</td>
                    <td className="pb_td">{pDetails?.specifications?.color}</td>
                </tr>
                <tr className="pb_tr">
                    <td className="pd_quantities">DIMENSIONS</td>
                    <td className="pb_td">{pDetails?.specifications?.dimensions?.long}x{pDetails?.specifications?.dimensions?.width}x{pDetails?.specifications?.dimensions?.long}</td>
                </tr>
            </table>
        
        </div>}
    {tab==2 && <div className="border3">
        {pDetails?.reviews?.map((e,i)=>{
                  return(
                      <div className="reviewcontainer">
                      <div className="reviewsubdiv">
                      <div className="personimgdiv"><img className="personimg" src={e?.user?.avatar} /></div>
                      <div>
                        <AiFillStar style={{color:"goldenrod"}}/>
                        <AiFillStar style={{color:"goldenrod"}}/>
                        <AiFillStar style={{color:"goldenrod"}}/>
                        <AiFillStar style={{color:"goldenrod"}}/>
                        <AiFillStar style={{color:"goldenrod"}}/>
                      </div>
                      </div>

                      <div className="reviewdetails" >
                      <div className="reviewclr">{e?.commentDate}</div>
                       <div>{e?.user?.name}</div>
                    <div className="reviewclr">{e?.review}</div>
                   </div>
                        </div>
                  )
                })}
        </div>}
</div>





    </div>
    </div>
        
    )
   
}