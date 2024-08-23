import React from 'react';
import {Link} from 'react-router-dom';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

//Images
import bgImage from './../assets/images/banner/bnr5.jpg';
import pic1 from './../assets/images/certificates/pic1.jpg';
import pic2 from './../assets/images/certificates/pic2.jpg';
import pic3 from './../assets/images/certificates/pic3.jpg';
import pic4 from './../assets/images/certificates/pic4.jpg';
import pic5 from './../assets/images/certificates/pic5.jpg';
import pic6 from './../assets/images/certificates/pic6.jpg';
import pic7 from './../assets/images/certificates/pic7.jpg';
import pic8 from './../assets/images/certificates/pic8.jpg';
import pic9 from './../assets/images/certificates/pic9.jpg';
import pic10 from './../assets/images/certificates/pic10.jpg';
import pic11 from './../assets/images/certificates/pic11.jpg';
import pic12 from './../assets/images/certificates/pic12.jpg';

//Component
import PageBanner from './../layouts/PageBanner';
import UpdateBlog from './../components/Home/UpdateBlog';

const certificateBlog = [
    {image:pic1 },
    {image:pic2 },
    {image:pic3 },
    {image:pic4 },
    {image:pic5 },
    {image:pic6 },
    {image:pic7 },
    {image:pic8 },
    {image:pic9 },
    {image:pic10},
    {image:pic11},
    {image:pic12},
];

const Certificates = () => {
    const onInit = () => {
      //  console.log('lightGallery has been initialized');
    };
    return (
        <>
            <div className="page-content bg-white">
              <PageBanner maintitle="Home" pagetitle="Our Certificates" background={bgImage} />
                <div className="content-inner">
                    <div className="container">                      
                           
                        <LightGallery
                            onInit={onInit}
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            elementClassNames="row certificates-bx"
                        >
                            {certificateBlog.map((item, index)=>(          
                                <div data-exthumbimage={item.image} data-src={item.image} title="Image" className="col-xl-3 col-lg-4 col-6 m-b30 lightimg" key={index}>		
                                    <img src={item.image} alt="" /> 
                                </div> 
                            ))}
                        </LightGallery>                        
                    </div>
                </div>
            </div>
            <hr className="container my-0" />
		
            <section className="content-inner-2">
                <div className="container">
                    <div className="section-head text-center mb-0">
                        <h6 className="sub-title">A SHORT BRIEF</h6>
                        <h2 className="title">It’s Time to Make This World</h2>
                        <p>We believe in a world without age-related diseases where everyone can live a healthier and longer life. So, join to our volunteer team!</p>
                        <Link to={"/contact-us"} className="btn btn-primary">GET A FREE QUOTE</Link>
                    </div>
                </div>
            </section>
            <div className="call-action style-1 content-inner-1">
			    <div className="container">
                    <UpdateBlog />
                </div>
            </div>
        </>
    );
};

export default Certificates;