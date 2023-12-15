import React from 'react'

import instance from '../../../api/instance';
import reactSelect from 'react-select';
import axios from 'axios';
import MenuItem from 'antd/es/menu/MenuItem';
const TeamPage = (props: any) => {
  const getStaffData = async () => {
    try {
      const response = await instance.get('/client/staff');
      
      // Assuming the API response has a data property that contains the actual data
      const staffData = response.data;
  
      // Handle the data as needed
      console.log('Staff Data:', staffData);
  
      return staffData;
    } catch (error) {
      // Handle errors
      console.error('Error fetching staff data:', error);
      throw error; // You may choose to handle errors differently based on your application's needs
    }
  };
  getStaffData()
  return (
    
     <div>
       {props.technicians.map((item: any) => {
                return <div key={item.id}>
                    {/* <h2>{item.name}</h2> */}
     </div>

            })}
{/* Team Start */}

<div className="container">
  
     <div className="container" >
        <div className="text-center" data-wow-delay="0.1s" style={{marginTop: '80px'}}>
          <h6 className="text-primary text-uppercase">// Các kỹ sư của chúng tôi //</h6>
          <h1 className="mb-5">Các kỹ sư chuyên nghiệp</h1>
        </div>
        <div className="row" >
       {props.technicians.map((item: any)=>{

          return <div key={item.id} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item ">
              <div className="position-relative overflow-hidden ">
                <img style={{width: '500px'}} className="img-fluid " src={item.image} alt="" />
                <div className="team-overlay position-absolute start-0  top-0 w-100 h-100">
                  <a className="btn btn-square mx-1" href=" "><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href=" "><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href=" "><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="bg-light text-center p-4 ">
                <h5 className="fw-bold mb-0 ">{item.name} </h5>
                <small >{item.information}</small>
              </div>
            </div>
          </div>
           })}
        </div>
      </div>
 
      
    </div>
</div>
  )
}

export default TeamPage