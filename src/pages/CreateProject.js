import React, { useState } from "react";
import bg2 from "../assets/images/background/bg4.jpg";
import { Step, Stepper } from "react-form-stepper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CreateProject() {
  //steplar
  const [step, setStep] = useState(0);
  //datalar
  const startup_info = {
    company: "",
    sub_category: "",
    startup_name: "",
    tagline: "",
    country: "",
    district: "",
    region:"",
    website_url: "",
    linkedin: "",
    project_overview: "",
  };
  const project_desc = {
    project_image:null,
    elevator_pitch_video: null,
    how_it_works_video: null,
    funding_goal: "",
    use_of_funds: "",
    business_plan: null,
    financial_statements: null,
    other_documents: null,
    time_limit: "",
    min_amount:"",
    
  };
  const founder = {
    project: "",
    name: "",
    role: "",
    email: "",
    phone_number: "",
    linkedin_profile: "",
    bio: "",
  };
  const pitchdeck = {
    problem_name_eng: "",
    problem_description_eng: "",
    problem_image: null,
    solution_name_eng: "",
    solution_description_eng: "",
    solution_image: null,
    market_size_name_eng:"",
    market_size_description_eng :"",
    market_size_image:null,
    target_customer_name_eng :"",

  };
  const pitchdeck1_s={
    target_customer_description_eng:"",
    target_customer_image:null,
    how_it_works_name_eng:"",
    how_it_works_description_eng:"",
    how_it_works_image:null,
    special_sauce_name_eng:"",
    special_sauce_description_eng:"",
    special_sauce_image:null,
    team_name_eng:"",
    team_description_eng:"",
    
  }
  const pitchdeck2_s ={
    team_image:null,
    why_now_name_eng :"",
    why_now_description_eng:"",
    why_now_image:null,
    business_model_name_eng:"",
    business_model_description_eng :"",
    business_model_image:null,
    competitors_name_eng:"",
    competitors_description_eng:"",
    competitors_image :null
  }
  const pitchdeck3_s ={
    tractions_name_eng :"",
    tractions_description_eng:"",
    tractions_image:null,
    financial_acquisitions_name_eng:"",
    financial_acquisitions_description_eng:"",
    financial_acquisitions_image:null,
    technology_name_eng:"",
    technology_description_eng:"",
    technology_image :null
  }
  const api_url = process.env.REACT_APP_INVEST_MAP_API;
  const token = localStorage.getItem("access_token");
  const [startUp, setStartUp] = useState(startup_info);
  const [project, setProject] = useState(project_desc);
  const [founder_s, setFounder_s] = useState(founder);
  const [pitchdeck_s, setPitchdek_s] = useState(pitchdeck);
  const [pitchdeck1, setPitchdek1] = useState(pitchdeck1_s);
  const [pitchdeck2, setPitchdek2] = useState(pitchdeck2_s);
  const [pitchdeck3, setPitchdek3] = useState(pitchdeck3_s);
  const [id, setId] = useState(null);
  
  
  const handleChangeStartUp = (e) => {
    const { name, value } = e.target;
   
    setStartUp((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChangeProject = (e) => {
    const { name, value, type, files } = e.target;
    setProject((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };
  const handleChangeFounder = (e) => {
    const { name, value } = e.target;
    setFounder_s((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChangePitchdeck = (e) => {
    const { name, value, type, files } = e.target;
    setPitchdek_s((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };
  const handlePitchdeck1 = (e) => {
    const { name, value, type, files } = e.target;
    setPitchdek1((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };
  const handlePitchdeck2 = (e) => {
    const { name, value, type, files } = e.target;
    setPitchdek2((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };
  const handlePitchdeck3 = (e) => {
    const { name, value, type, files } = e.target;
    setPitchdek3((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };
  const formSubmit=(e, action)=>{
    e.preventDefault();
    action();
  }
  const CREATE_PROJECT =async()=>{
    try {
      const res = await axios.post(`${api_url}/api/project/create/`, {...startUp, ...project}, {
        headers:{
          Authorization:`Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      });
      if(res){
        setStep(2);
        setId(res?.data?.project_id);
      
      }
    } catch (error) {
      console.log(error);
    }
  }
  const CREATE_FOUNDER = async() =>{
    try {
      const res = await axios.post(`${api_url}/api/project/founder/`, {project_id:id, ...founder_s} ,{
        headers:{
          Authorization:`Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
        
      });
      if(res){
        setStep(3);
        console.log(res);
      }
    } catch (error) {
      console.log(error)
    }
  }
  const nav = useNavigate()
  const CREATE_PITCHDECK = async() =>{
    try {
      const res = await axios.post(`${api_url}/api/project/pitchdeck/`, {project_id:id, ...pitchdeck_s, ...pitchdeck1, pitchdeck2, pitchdeck3},
        {
          headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          }
        }
      );
      if(res){
        console.log(res);
        nav("/");
      }
      else{
        console.log("Response kelmadi")
      }

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="">
      <div className="page-content bg-white">
        <section
          className="content-inner-1 section-pattren1 overlay-white-dark"
          style={{
            backgroundImage: "url(" + bg2 + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col">
                <div className="form-wrapper overflow-hidden">
                  <div className="form-wizard dz-form-step">
                    <Stepper
                      className="nav nav-wizard"
                      activeStep={step}
                      
                    >
                      <Step className="nav-link" onClick={() => setStep(0)}>
                        0
                      </Step>
                      <Step className="nav-link" onClick={() => setStep(1)}>
                        1
                      </Step>
                      <Step className="nav-link" onClick={() => setStep(2)}>
                        2
                      </Step>
                      <Step className="nav-link" onClick={() => setStep(3)}>
                        3
                      </Step>
                      <Step className="nav-link" onClick={() => setStep(4)}>
                        4
                      </Step>
                      <Step className="nav-link" onClick={() => setStep(4)}>
                        5
                      </Step> <Step className="nav-link" onClick={() => setStep(4)}>
                        6
                      </Step>
                    </Stepper>

                    {step === 0 && (
                      <div>
                        <p className="text-center my-4 fs-3">Startup Information</p>
                        <div className="row mb-2">
                          
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="company" className="form-label">
                                Company
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="company"
                                name="company"
                                value={startUp.company}
                                onChange={handleChangeStartUp}
                                placeholder="Enter company name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="sub_category"
                                className="form-label"
                              >
                                Sub Category
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="sub_category"
                                name="sub_category"
                                value={startUp.sub_category}
                                onChange={handleChangeStartUp}
                                placeholder="Enter sub category"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="startup_name"
                                className="form-label"
                              >
                                Startup Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="startup_name"
                                name="startup_name"
                                value={startUp.startup_name}
                                onChange={handleChangeStartUp}
                                placeholder="Enter startup name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="tagline" className="form-label">
                                Tagline
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="tagline"
                                name="tagline"
                                value={startUp.tagline}
                                onChange={handleChangeStartUp}
                                placeholder="Enter tagline"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="country" className="form-label">
                                Country
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="country"
                                name="country"
                                value={startUp.country}
                                onChange={handleChangeStartUp}
                                placeholder="Enter country"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="district" className="form-label">
                                District
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="district"
                                name="district"
                                value={startUp.district}
                                onChange={handleChangeStartUp}
                                placeholder="Enter district"
                              />
                            </div>
                          </div>
                        </div>
                        

                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="website_url"
                                className="form-label"
                              >
                                Website URL
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="website_url"
                                name="website_url"
                                value={startUp.website_url}
                                onChange={handleChangeStartUp}
                                placeholder="Enter website URL"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="social_media_links"
                                className="form-label"
                              >
                                Social Media Links
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="social_media_links"
                                name="linkedin"
                                value={startUp.linkedin}
                                onChange={handleChangeStartUp}
                                placeholder="Enter social media links"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mb-2 row">
                          <div className="col-md-6">
                          <div className="">
                            <label
                              htmlFor="project_overview"
                              className="form-label"
                            >
                              Project Overview
                            </label>
                            <textarea
                              className="form-control"
                              id="project_overview"
                              name="project_overview"
                              rows="3"
                              value={startUp.project_overview}
                              onChange={handleChangeStartUp}
                              placeholder="Enter project overview"
                            ></textarea>
                          </div>
                          </div>
                         <div className="col-md-6">
                         <div className="">
                              <label htmlFor="country" className="form-label">
                                Region
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="country"
                                name="region"
                                value={startUp.region}
                                onChange={handleChangeStartUp}
                                placeholder="Enter country"
                              />
                            </div>
                         </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-md-6">
                           
                          </div>
                          {/* <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="district" className="form-label">
                                District
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="district"
                                name="district"
                                value={startUp.district}
                                onChange={handleChangeStartUp}
                                placeholder="Enter district"
                              />
                            </div>
                          </div> */}
                        </div>
                        <button
                          onClick={() => setStep(1)}
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    )}

                    {step === 1 && (
                      <div>
                        <p className="text-center my-4 fs-3">Project Description</p>
                          <div className="row mb-2">
                          <div className="col-md-6">
                            <div className=" mb-0">
                              <label
                                htmlFor="elevator_pitch_video"
                                className="form-label"
                              >
                                Min amount
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="elevator_pitch_video"
                                name="min_amount"
                                value={project.min_amount}
                                onChange={handleChangeProject}
                                placeholder="Enter elevator pitch video URL"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="how_it_works_video"
                                className="form-label"
                              >
                                Project img
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                name="project_image"
                                onChange={handleChangeProject}
                                placeholder="Enter how it works video URL"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="elevator_pitch_video"
                                className="form-label"
                              >
                                Elevator Pitch Video
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="elevator_pitch_video"
                                name="elevator_pitch_video"
                                onChange={handleChangeProject}
                                placeholder="Enter elevator pitch video URL"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="how_it_works_video"
                                className="form-label"
                              >
                                How It Works Video
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="how_it_works_video"
                                name="how_it_works_video"
                
                                onChange={handleChangeProject}
                                placeholder="Enter how it works video URL"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="funding_goal"
                                className="form-label"
                              >
                                Funding Goal
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="funding_goal"
                                name="funding_goal"
                                value={project.funding_goal}
                                onChange={handleChangeProject}
                                placeholder="Enter funding goal"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="use_of_funds"
                                className="form-label"
                              >
                                Use of Funds
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="use_of_funds"
                                name="use_of_funds"
                                value={project.use_of_funds}
                                onChange={handleChangeProject}
                                placeholder="Enter use of funds"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="business_plan"
                                className="form-label"
                              >
                                Business Plan
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="business_plan"
                                name="business_plan"
                               
                                onChange={handleChangeProject}
                                placeholder="Enter business plan"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="financial_statements"
                                className="form-label"
                              >
                                Financial Statements
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="financial_statements"
                                name="financial_statements"
                                onChange={handleChangeProject}
                                placeholder="Enter financial statements"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="other_documents"
                                className="form-label"
                              >
                                Other Documents
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="other_documents"
                                name="other_documents"
                           
                                onChange={handleChangeProject}
                                placeholder="Enter other documents"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="deadline" className="form-label">
                                Deadline
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="deadline"
                                name="time_limit"
                                value={project.time_limit}
                                onChange={handleChangeProject}
                                placeholder="Enter deadline"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end gap-3">
                          <button
                            onClick={() => setStep(0)}
                            className="btn btn-primary"
                          >
                            Pervious
                          </button>
                          <button
                            className="btn btn-warning"
                            onClick={(e)=>formSubmit(e, CREATE_PROJECT)}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                    {step === 2 && (
                      <div>
                        <p className="text-center my-4 fs-3">Founder</p>
                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="project" className="form-label">
                                Project
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="project"
                                name="project"
                                value={founder_s.project}
                                onChange={handleChangeFounder}
                                placeholder="Enter project"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="name" className="form-label">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={founder_s.name}
                                onChange={handleChangeFounder}
                                placeholder="Enter name"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="role" className="form-label">
                                Role
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="role"
                                name="role"
                                value={founder_s.role}
                                onChange={handleChangeFounder}
                                placeholder="Enter role"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={founder_s.email}
                                onChange={handleChangeFounder}
                                placeholder="Enter email"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="phone_number"
                                className="form-label"
                              >
                                Phone Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="phone_number"
                                name="phone_number"
                                value={founder_s.phone_number}
                                onChange={handleChangeFounder}
                                placeholder="Enter phone number"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="linkedin_profile"
                                className="form-label"
                              >
                                LinkedIn Profile
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="linkedin_profile"
                                name="linkedin_profile"
                                value={founder_s.linkedin_profile}
                                onChange={handleChangeFounder}
                                placeholder="Enter LinkedIn profile URL"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mb-2">
                          <div className="">
                            <label htmlFor="bio" className="form-label">
                              Bio
                            </label>
                            <textarea
                              className="form-control"
                              id="bio"
                              name="bio"
                              rows="3"
                              value={founder_s.bio}
                              onChange={handleChangeFounder}
                              placeholder="Enter bio"
                            ></textarea>
                          </div>
                        </div>

                        <div className="d-flex gap-3 justify-content-end">
                          <button
                            className="btn btn-primary "
                            onClick={() => setStep(1)}
                          >
                            Pervious
                          </button>
                          <button
                            className="btn btn-warning "
                            onClick={(e)=>formSubmit(e, CREATE_FOUNDER)}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                    {step === 3 && (
                      <form action="">
                                                <p className="text-center my-4 fs-3">Pitchdeck Step One</p>

                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="problem_name_eng"
                                className="form-label"
                              >
                                Problem Name (ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="problem_name_eng"
                                name="problem_name_eng"
                                value={pitchdeck_s.problem_name_eng}
                                onChange={handleChangePitchdeck}
                                placeholder="Enter problem name in English"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="problem_description_eng"
                                className="form-label"
                              >
                                Problem Description (ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="problem_description_eng"
                                name="problem_description_eng"
                                value={pitchdeck_s.problem_description_eng}
                                onChange={handleChangePitchdeck}
                                placeholder="Enter problem description in English"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="solution_name_eng"
                                className="form-label"
                              >
                                Solution Name (ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="solution_name_eng"
                                name="solution_name_eng"
                                value={pitchdeck_s.solution_name_eng}
                                onChange={handleChangePitchdeck}
                                placeholder="Enter solution name in English"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="solution_description_eng"
                                className="form-label"
                              >
                                Solution Description (ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="solution_description_eng"
                                name="solution_description_eng"
                                value={pitchdeck_s.solution_description_eng}
                                onChange={handleChangePitchdeck}
                                placeholder="Enter solution description in English"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-2 row">
                          <div className="col-md-6">
                          <div className="">
                            <label
                              htmlFor="problem_image"
                              className="form-label"
                            >
                              Problem Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="problem_image"
                              name="problem_image"
                              onChange={handleChangePitchdeck}
                            />
                          </div>
                          </div>
                          <div className="col-md-6">
                          <div className="">
                            <label
                              htmlFor="solution_image"
                              className="form-label"
                            >
                              Solution Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="solution_image"
                              name="solution_image"
                              onChange={handleChangePitchdeck}
                            />
                          </div>
                          </div>
                        </div>

                        <div className="mb-2">
                        <div className="col-md-6">
                          <div className="">
                            <label
                              htmlFor="market_size_image"
                              className="form-label"
                            >
                              Market size image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="market_size_image"
                              name="market_size_image"
                              onChange={handleChangePitchdeck}
                            />
                          </div>
                          </div>
                          <div className="col-md-6">
                          <div className="">
                            <label
                              htmlFor="solution_image"
                              className="form-label"
                            >
                              Market size name eng
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="market_size_name_eng"
                              name="market_size_name_eng"
                              value={pitchdeck_s.market_size_name_eng}
                              onChange={handleChangePitchdeck}
                            />
                          </div>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="problem_name_eng"
                                className="form-label"
                              >
                                Market size description(ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="market_size_description_eng"
                                name="market_size_description_eng"
                                value={pitchdeck_s.market_size_description_eng}
                                onChange={handleChangePitchdeck}
                                placeholder="Enter problem name in English"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label
                                htmlFor="problem_description_eng"
                                className="form-label"
                              >
                                Target customer name eng(ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="target_customer_name_eng"
                                name="target_customer_name_eng"
                                value={pitchdeck_s.target_customer_name_eng}
                                onChange={handleChangePitchdeck}
                                placeholder="Enter problem description in English"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex gap-3 justify-content-end">
                          <button
                            className="btn btn-primary "
                            onClick={() => setStep(2)}
                          >
                            Pervious
                          </button>
                          <button
                            className="btn btn-primary "
                            onClick={() => setStep(4)}
                          >
                            Next
                          </button>
                        </div>
                      </form>
                    )}
                    {step===4&&(
                      <form action="">
                      <p className="text-center my-4 fs-3">Pitchdeck Step Two</p>

                      <div className="row mb-2">
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="target_customer_description_eng" className="form-label">
                              Target Customer Description (ENG)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="target_customer_description_eng"
                              name="target_customer_description_eng"
                              value={pitchdeck1.target_customer_description_eng}
                              onChange={handlePitchdeck1}
                              placeholder="Enter target customer description in English"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="how_it_works_name_eng" className="form-label">
                              How It Works Name (ENG)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="how_it_works_name_eng"
                              name="how_it_works_name_eng"
                              value={pitchdeck1.how_it_works_name_eng}
                              onChange={handlePitchdeck1}
                              placeholder="Enter how it works name in English"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="special_sauce_name_eng" className="form-label">
                              Special Sauce Name (ENG)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="special_sauce_name_eng"
                              name="special_sauce_name_eng"
                              value={pitchdeck1.special_sauce_name_eng}
                              onChange={handlePitchdeck1}
                              placeholder="Enter special sauce name in English"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="team_name_eng" className="form-label">
                              Team Name (ENG)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="team_name_eng"
                              name="team_name_eng"
                              value={pitchdeck1.team_name_eng}
                              onChange={handlePitchdeck1}
                              placeholder="Enter team name in English"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="target_customer_image" className="form-label">
                              Target Customer Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="target_customer_image"
                              name="target_customer_image"
                              onChange={handlePitchdeck1}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="how_it_works_image" className="form-label">
                              How It Works Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="how_it_works_image"
                              name="how_it_works_image"
                              onChange={handlePitchdeck1}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="special_sauce_image" className="form-label">
                              Special Sauce Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="special_sauce_image"
                              name="special_sauce_image"
                              onChange={handlePitchdeck1}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="team_image" className="form-label">
                              Team Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="team_image"
                              name="team_image"
                              onChange={handlePitchdeck1}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex gap-3 justify-content-end">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => setStep(3)}
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => setStep(5)}
                        >
                          Next
                        </button>
                      </div>
                    </form>
                    )}
                    {step===5&&(
                        <form action="">
                          <p className="text-center my-4 fs-3">Pitchdeck Step Three</p>

                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="why_now_name_eng" className="form-label">
                                Why Now Name (ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="why_now_name_eng"
                                name="why_now_name_eng"
                                value={pitchdeck2.why_now_name_eng}
                                onChange={handlePitchdeck2}
                                placeholder="Enter why now name in English"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="why_now_description_eng" className="form-label">
                                Why Now Description (ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="why_now_description_eng"
                                name="why_now_description_eng"
                                value={pitchdeck2.why_now_description_eng}
                                onChange={handlePitchdeck2}
                                placeholder="Enter why now description in English"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="why_now_image" className="form-label">
                                Why Now Image
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="why_now_image"
                                name="why_now_image"
                                onChange={handlePitchdeck2}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="business_model_name_eng" className="form-label">
                                Business Model Name (ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="business_model_name_eng"
                                name="business_model_name_eng"
                                value={pitchdeck2.business_model_name_eng}
                                onChange={handlePitchdeck2}
                                placeholder="Enter business model name in English"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="business_model_description_eng" className="form-label">
                                Business Model Description (ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="business_model_description_eng"
                                name="business_model_description_eng"
                                value={pitchdeck2.business_model_description_eng}
                                onChange={handlePitchdeck2}
                                placeholder="Enter business model description in English"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="business_model_image" className="form-label">
                                Business Model Image
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="business_model_image"
                                name="business_model_image"
                                onChange={handlePitchdeck2}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="competitors_name_eng" className="form-label">
                                Competitors Name (ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="competitors_name_eng"
                                name="competitors_name_eng"
                                value={pitchdeck2.competitors_name_eng}
                                onChange={handlePitchdeck2}
                                placeholder="Enter competitors name in English"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="competitors_description_eng" className="form-label">
                                Competitors Description (ENG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="competitors_description_eng"
                                name="competitors_description_eng"
                                value={pitchdeck2.competitors_description_eng}
                                onChange={handlePitchdeck2}
                                placeholder="Enter competitors description in English"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="">
                              <label htmlFor="competitors_image" className="form-label">
                                Competitors Image
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="competitors_image"
                                name="competitors_image"
                                onChange={handlePitchdeck2}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex gap-3 justify-content-end">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setStep(4)}
                          >
                            Previous
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setStep(6)}
                          >
                            Next
                          </button>
                        </div>
                      </form>
                      
                    )}
                    {step===6&&(
                      <form action="">
                      <p className="text-center my-4 fs-3">Pitchdeck Step Four</p>

                      <div className="row mb-2">
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="tractions_name_eng" className="form-label">
                              Tractions Name (ENG)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="tractions_name_eng"
                              name="tractions_name_eng"
                              value={pitchdeck3.tractions_name_eng}
                              onChange={handlePitchdeck3}
                              placeholder="Enter tractions name in English"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="tractions_description_eng" className="form-label">
                              Tractions Description (ENG)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="tractions_description_eng"
                              name="tractions_description_eng"
                              value={pitchdeck3.tractions_description_eng}
                              onChange={handlePitchdeck3}
                              placeholder="Enter tractions description in English"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="tractions_image" className="form-label">
                              Tractions Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="tractions_image"
                              name="tractions_image"
                              onChange={handlePitchdeck3}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="financial_acquisitions_name_eng" className="form-label">
                              Financial Acquisitions Name (ENG)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="financial_acquisitions_name_eng"
                              name="financial_acquisitions_name_eng"
                              value={pitchdeck3.financial_acquisitions_name_eng}
                              onChange={handlePitchdeck3}
                              placeholder="Enter financial acquisitions name in English"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="financial_acquisitions_description_eng" className="form-label">
                              Financial Acquisitions Description (ENG)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="financial_acquisitions_description_eng"
                              name="financial_acquisitions_description_eng"
                              value={pitchdeck3.financial_acquisitions_description_eng}
                              onChange={handlePitchdeck3}
                              placeholder="Enter financial acquisitions description in English"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="financial_acquisitions_image" className="form-label">
                              Financial Acquisitions Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="financial_acquisitions_image"
                              name="financial_acquisitions_image"
                              onChange={handlePitchdeck3}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="technology_name_eng" className="form-label">
                              Technology Name (ENG)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="technology_name_eng"
                              name="technology_name_eng"
                              value={pitchdeck3.technology_name_eng}
                              onChange={handlePitchdeck3}
                              placeholder="Enter technology name in English"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="technology_description_eng" className="form-label">
                              Technology Description (ENG)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="technology_description_eng"
                              name="technology_description_eng"
                              value={pitchdeck3.technology_description_eng}
                              onChange={handlePitchdeck3}
                              placeholder="Enter technology description in English"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-md-6">
                          <div className="">
                            <label htmlFor="technology_image" className="form-label">
                              Technology Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="technology_image"
                              name="technology_image"
                              onChange={handlePitchdeck3}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex gap-3 justify-content-end">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => setStep(5)}
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={(e) => formSubmit(e, CREATE_PITCHDECK)}
                        >
                          Finally
                        </button>
                      </div>
                    </form>
                    )}

                  </div>
                </div>
              </div>
            </div>
            <form action=""></form>
          </div>
        </section>
      </div>
    </div>
  );
}
