import "../styles/proddetails.css"

import{IoMdMail} from "react-icons/io"
import{IoCall} from "react-icons/io5"
import{BsFillPersonFill} from "react-icons/bs"
import {BiLogoPinterestAlt} from "react-icons/bi"
import {FaFacebookF} from "react-icons/fa6"
import {BsTwitter} from "react-icons/bs"
import {ImLinkedin} from "react-icons/im"
import {GrSearch}from "react-icons/gr"
import {AiOutlineHeart} from "react-icons/ai"
import {BsBagDash} from "react-icons/bs"
import {AiOutlineDown} from "react-icons/ai"
import {Link} from "react-router-dom";
const Proddetails = () =>{
    return(
        <div>
            <div className="section1">
                <div className="s1d1">
                    <div className="s1d1d1">
                        <div><IoMdMail /></div>
                        <div><h4>info.deercreative@gmail.com</h4></div>
                    </div>
                    <div className="s1d1d2">
                        <div><IoCall/></div>
                        <div>+65 11.188.888</div>
                    </div>
                </div>
                <div className="s1d2">
                    <div className="s1d2d1">
                        <div className="div1"><FaFacebookF/></div>
                        <div className="div1"><BsTwitter/></div>
                        <div className="div1"><ImLinkedin/></div>
                        <div className="div1"><BiLogoPinterestAlt/></div>
                    </div>
                    <div className="s1d2d2">
                        <div className="imgdiv1"><img className="img1" src="https://clipartix.com/wp-content/uploads/2016/04/Usa-flag-clipart-0-clipartcow-2.png"></img></div>
                        <div>English</div>
                    </div>
                    <div className="s1d2d3">
                        <div className=""><BsFillPersonFill/></div>
                        <Link to={"/"}>
                        <div className="">Login</div></Link>
                        <Link to={"/signup"}>
                        <div className=""><h1>Signup</h1></div></Link>
                        


                    </div>
                </div>
            </div>


            <div className="section2">
                <div className="s2d1">
                    <div className="imgdiv2"><img className="img2" src="https://ogami-react.vercel.app/assets/images/logo.png"></img></div>
                    <div className="inputbox">
                        <select className="inpstrt">All Categories
                        <option>All categories</option>
                        <option>Bread</option>
                        <option>Fastfood</option>
                        <option>Ocean Foods</option>
                        <option>Oranges</option>
                        <option>Organic Drinks</option>
                        <option>Vegetables</option>
                        
                        </select>
                        <div className="inp"> <input placeholder="What do u need" className="inpbox"></input></div>
                        <div className="searchdiv"><GrSearch className="searchicon"/></div>
                    </div>
                </div>
                <div className="s2d2">
                    <div className="s2d2d1">HOME<AiOutlineDown/></div>
                    <div className="s2d2d2">SHOP<AiOutlineDown/></div>
                    <div className="s2d2d3">BLOG <AiOutlineDown/></div>
                    <div className="s2d2d4">Pages</div>
                    <div className="s2d2d5">About Us</div>
                    <div className="s2d2d6">
                        <div><AiOutlineHeart/></div>
                        <div><BsBagDash/></div>
                        <div>$0.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proddetails;