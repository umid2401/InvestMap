import React, { useEffect, useState } from 'react'
//Images
import shape3 from "../assets/images/side-images/shape3.png";
import shape1 from "../assets/images/pattern/shape1.png";

import shape5 from "../assets/images/pattern/shape5.png";
import shape6 from "../assets/images/pattern/shape6.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
const cardBlog = [
    {
      title: "Trusted Partner",
      subtitle: "394-091-3312",
      icon: "flaticon-phone-call-1",
    },
    { title: "Mail", subtitle: "support@akcel.com", icon: "flaticon-email" },
    {
      title: "Our Address",
      subtitle: "832  Thompson Drive, San Fransisco, United States",
      icon: "flaticon-pin",
    },
  ];
export default function ContactComponent() {
  const [card, setCard] = useState(null);
  const api_url = process.env.REACT_APP_INVEST_MAP_API;
  const getCard = async () => {
    try {
      const response = await axios.get(`${api_url}/api/contact-details/`);
      const data = response?.data;
      console.log(response);
      setCard(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const cardBlog = [
    {
      title: "Phone",
      subtitle: card?.phone_number1,
      icon: "flaticon-phone-call-1",
    },
    { title: "Mail", subtitle: card?.email1, icon: "flaticon-email" },
    {
      title: "Our Address",
      subtitle: card?.office_address,
      icon: "flaticon-pin",
    },
  ];
  return (
    <section className="content-inner-1 bg-light section-pattren1">
          <div className="container">
            <div className="row justify-content-center">
              {cardBlog.map((item, ind) => (
                <div className="col-lg-4 col-md-6 m-b20" key={ind}>
                  <div className="icon-bx-wraper box-hover style-3">
                    <div className="icon-lg">
                      <Link to={"/services-details"} className="icon-cell">
                        <i className={item.icon}></i>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-tilte m-b5 text-capitalize">
                        {item.title}
                      </h5>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img src={shape1} className="shape-1 move-1" alt="shape" />
          <img src={shape3} className="shape-3 move-1" alt="shape" />
          <img src={shape5} className="shape-4 rotating" alt="shape" />
          <img src={shape6} className="shape-5 rotating" alt="shape" />
        </section>
  )
}
