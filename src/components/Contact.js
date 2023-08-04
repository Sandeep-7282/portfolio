import React, { useState } from 'react'
import firestore from './Firebase';
import {addDoc,collection} from '@firebase/firestore';
const Contact = () => {
   let [success,setsuccess]=useState(false);
 var ref=collection(firestore,"Contact-Form")
function submitform(e){
  e.preventDefault();
  const name=document.getElementById("name").value;
  const mail=document.getElementById("email").value;
  const msg=document.getElementById("msg").value;
   var data={
    name:name,
    mail:mail,
    message:msg
   }
   try{
    addDoc(ref,data)
    setsuccess(true)
    document.getElementById("msg-not").style.display="block";
    document.getElementById("form").reset();
    setTimeout(()=>{
       document.getElementById("msg-not").style.display="none";
       setsuccess(false)
    },3000);
   }
   catch(err){
  setsuccess(false)
    console.log(err);
   }
}
  return (
   <>
    <div className="contact">
     <div className="contact-cont">    
      <div className="con-head">
        <h2>Contact <span> Me!</span></h2>
      </div>
      <div className="form-cont">
      <form onSubmit={submitform} id="form">
        <input type="text" name="Name" id="name" minlength="4" placeholder="Enter Name" required/>
        <input type="email"  name="E-mail" id="email" placeholder="Enter Mail-Id" required/>
        <textarea type="text" rows="7" cols="30" minlength="2" id="msg" name="Message" placeholder="Your Message" required></textarea>
       <div className="btm-cont">
        <div className="btn-grp">
         <button type="submit" id="btn-1">Send</button>
         <span id="msg-not">Message sent successfully</span>
        </div>
       <div className="group">
        <a href="https://www.instagram.com/sandeep18_18/"><i className='bx bxl-instagram' ></i></a>
        <a href="https://www.facebook.com/sandeep.sp.77985?mibextid=ZbWKwL"><i className='bx bxl-facebook-circle'></i></a>
        <a href="https://www.linkedin.com/in/nadegouni-sandeep-634a131b3"><i className='bx bxl-linkedin-square' ></i></a>
        <a href="https://twitter.com/Pricele83502346"><i className='bx bxl-twitter' ></i></a>
    </div>
       </div>
       
        </form>
      </div>
      </div>
    </div>
   </>
  )
}

export default Contact
