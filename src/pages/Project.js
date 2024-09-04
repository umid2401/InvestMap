import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import React, {  useState } from "react";
import ProjectMasonry from '../components/Project/ProjectMasonry';
import UpdateBlog from '../components/Home/UpdateBlog';
import axios from 'axios';

const Project = () => {
    //Api
    const api_url = process.env.REACT_APP_INVEST_MAP_API;
    // eslint-disable-next-line no-unused-vars
    const [data, setdData] = useState();
    // eslint-disable-next-line no-unused-vars
    const getAllProjectData = async()=>{
        try{
            const res = await axios.get(`${api_url}/api.investmap.uz/api/project/`);
            if(res.status===200){
                setdData(res?.data)
            }
        }
        catch(err){
            console.log(err)
        }
    }
    const [dropbtn2,setDropbtn2] = useState('All Category');
    return (
        <>
            <div className="page-content bg-white">
                <div className="find-bx-wrapper " style={{marginTop:"90px"}}>
                    <div className="container">
                        <div className="find-bx bg-white">
                            <form>
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="">
                                            <Dropdown className="select-drop-2">
                                                <Dropdown.Toggle as="div" className="i-false select-drop-btn-2">
                                                    <span>{dropbtn2}</span>
                                                    <i className="fa-regular fa-angle-down"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={()=>setDropbtn2('All Category')}>All Category</Dropdown.Item>
                                                    <Dropdown.Item onClick={()=>setDropbtn2('Newest')}>Newest</Dropdown.Item>
                                                    <Dropdown.Item onClick={()=>setDropbtn2('Oldest')}>Oldest</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-8">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Find Projects" />
                                            <div className="input-group-prepend">
                                                <button className="btn"><i className="las la-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="tag-list"> 
                            <span className="title text-black">Popular Search:</span>
                            <Link to={"#"}>Technology,</Link>
                            <Link to={"#"}>Charity,</Link>
                            <Link to={"#"}>Health,</Link>
                            <Link to={"#"}>Medical</Link>
                        </div>
                    </div>
                </div>
                <section className="content-inner-2">
			        <div className="container">
                        <ProjectMasonry />
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

export default Project;
