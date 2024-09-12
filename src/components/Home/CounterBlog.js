import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';



const CounterBlog = () => {
    const [data, setDta] = useState();
    const api_url = process.env.REACT_APP_INVEST_MAP_API;
    const getDta = async()=>{
        try {
            const res = await axios.get(`${api_url}/api/statistics/`);
            setDta(res?.data[0]);
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getDta()
    },[]);
    const counterData = [
        {number:data?.value, title:"Total Donor" },
        {number:data?.project_count, title:"Projects" },
        {number:data?.investor_count, title:"Investors" },
        {number:"852", title:"Volunteer" },
    ];
    return (
        <>
          {counterData.map((data, index)=>(
            <div className="col-lg-3 col-6 m-b30" key={index}>
                <div className="counter-style-1 text-center">
                    <span className="counter counter-num">
                        <CountUp 
                            end={data.number} 
                            separator = ","
                            duration= "3"
                        />
                    </span>
                    <p className="counter-text">{data.title}</p>
                </div>
            </div>  
          ))}
        </>
    );
};


export default CounterBlog;