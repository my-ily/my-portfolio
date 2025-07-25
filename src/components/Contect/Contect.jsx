import React from 'react';
import '../Contect/contact.css'
import arrow from '../Contect/assets/arrow_icon.png'
import righImage from '../Contect/assets/right_img.png'
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { useState, useEffect } from "react";
const Contect = () => {
     const {register, reset, handleSubmit} = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
const accessKey = "037a797d-a37f-45cf-8693-244796f048e0";
  
  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });


    return (
     <div className="contact-container">
        <form action="" className="contact-left" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-left-title">
                <h2 className="">Get in touch</h2>
                <hr/>
            </div>
            <input type="text" name="name" placeholder="name" className="contact-inputs" {...register("name", { required: true })}/>
             <input type="email" name="eamil" placeholder="Email" className="contact-inputs" {...register("email", { required: true })}/>

             <textarea id="text" name="message" placeholder="message" className="contact-inputs" {...register("message", { required: true })}></textarea>
             <button type="submit" >Submit <img src={arrow}/></button>
  <div>{result}</div>
        </form>
       
        <div className="contact-right">
<img src={righImage}/>

        </div>
    
     </div>
        
    );
}

export default Contect;
