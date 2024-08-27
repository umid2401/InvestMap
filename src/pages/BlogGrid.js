import React from "react";
import { Link } from "react-router-dom";

import PageBanner from "../layouts/PageBanner";

//images
import bg from "../assets/images/banner/bnr4.jpg";

import { cardDetials } from "./News";
import UpdateBlog from "../components/Home/UpdateBlog";

const BlogGrid = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageBanner maintitle="Blog" pagetitle="Blog grid" background={bg} />
        <section className="content-inner-2">
          <div className="container">
            <div className="row">
              {cardDetials.map((item, ind) => (
                <div className="col-xl-4 col-md-6 m-b30" key={ind}>
                  <div className="dz-card style-1">
                    <div className="dz-media">
                      <Link to={"/blog-details"}>
                        <img src={item.image} alt="" />
                      </Link>
                      <ul className="dz-badge-list">
                        <li>
                          <Link to={"#"} className="dz-badge">
                            {item.tage}
                          </Link>
                        </li>
                      </ul>
                      <Link to={"/blog-details"} className="btn btn-secondary">
                        Read More
                      </Link>
                    </div>
                    <div className="dz-info">
                      <h5 className="dz-title">
                        <Link to={"/blog-details"}>{item.title} </Link>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et aliqua.
                      </p>
                      <div className="author-wrappper">
                        <div className="author-media">
                          <img src={item.image2} alt="" />
                        </div>
                        <div className="author-content">
                          <div className="author-head">
                            <h6 className="author-name">{item.autor}</h6>
                          </div>
                          <ul className="author-meta">
                            <li className="date">November 21th, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-12 m-sm-t0 m-t30">
                <nav className="pagination-bx">
                  <div className="page-item">
                    <Link to={"#"} className="page-link prev">
                      <i className="fas fa-chevron-left"></i>
                    </Link>
                  </div>
                  <ul className="pagination">
                    <li className="page-item">
                      <Link to={"#"} className="page-link">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to={"#"} className="page-link active">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to={"#"} className="page-link">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to={"#"} className="page-link">
                        4
                      </Link>
                    </li>
                  </ul>
                  <div className="page-item">
                    <Link to={"#"} className="page-link next">
                      <i className="fas fa-chevron-right"></i>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <div className="call-action style-1 content-inner-1">
          <div className="container">
            <UpdateBlog />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
