import React, { useContext, useEffect } from 'react'
import "./Verify.css"
import {Navigate, useNavigate, useSearchParams} from 'react-router-dom'
import {StoreContext} from '../../context/StoreContext'
import axios from "axios"

const Verify = () => {
    const[searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
      const response = await axios.post(url+"/api/order/verify",{success,orderId});
      if(response.data.success){
        navigate("/myorders"); // yet to add in it
      }
      else{
        navigate("/");
      }
    }
// navigate will take place when it is refreshed
    useEffect(()=>{
        verifyPayment();
    },[])


  return (
    <div className='verify'>
      <div className="spinner">

      </div>
    </div>
  )
  }

export default Verify