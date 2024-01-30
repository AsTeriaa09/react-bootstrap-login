import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import userImg from "../images/user.jpg";
import "../Styles/upperNav.css"

const UpperNav = () => {
    const [scroll , setScroll ] = useState(false);
    useEffect(()=>{
        window.onscroll = ()=>{
            if(window.scrollY > 22){
                setScroll(true);
            }else{
                setScroll(false)
            }
        }
    },[])
  return (
    <div>
      <div className={scroll ? "navbar navbar-float py-3" : "navbar py-3"}>
        <div className="left-section">
          <FaHome /> / profile / user list
        </div>
        <div className="right-section">
            <img src={userImg} alt="" />
        </div>
      </div>
      <div className="content">
      ullam. Cupiditate aut magni ipsa, excepturi a voluptatum accusantium fuga. Iste qui, aspernatur ab aliquid repellat voluptatum voluptates eos dolorem quasi nesciunt similique assumenda obcaecati soluta, illo nulla harum doloremque. Adipisci molestiae consequatur vitae amet! Esse totam iure dolores iusto cum, sit ex consequatur a obcaecati! Velit incidunt, nobis ipsum quisquam a ab soluta quo consectetur ea rem porro eligendi, quod sint commodi hic. Explicabo laboriosam cupiditate corporis illum nesciunt eius fuga ullam. Reiciendis autem sequi dolore nobis laudantium. Veniam sequi inventore soluta. Possimus officia ut 
      isquam a ab soluta quo consectetur ea rem porro eligendi, quod sint commodi hic. Explicabo laboriosam cupiditate corporis illum nesciunt eius fuga ullam. Reiciendis autem sequi dolore nobis laudantium. Veniam sequi inventore soluta. Possimus officia ut 
      quisquam a ab soluta quo consectetur ea rem porro eligendi, quod sint commodi hic. Explicabo laboriosam cupiditate corporis illum nesciunt eius fuga ullam. Reiciendis autem sequi dolore nobis laudantium. Veniam sequi inventore soluta. Possimus officia ut 
      isquam a ab soluta quo consectetur ea rem porro eligendi, quod sint commodi hic. Explicabo laboriosam cupiditate corporis illum nesciunt eius fuga ullam. Reiciendis autem sequi dolore nobis laudantium. Veniam sequi inventore soluta. Possimus officia ut 
      </div>
    </div>
  );
};

export default UpperNav;
