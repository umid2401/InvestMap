import React, { useState } from 'react'
import bg2 from "../assets/images/background/bg4.jpg";
import { Step, Stepper } from 'react-form-stepper';
export default function CreateProject() {
    //steplar
  const [step, setStep] = useState(0);
  //datalar
  const startup_info = {
    company:"",
    sub_category:"",
    startup_name:"",
    tagline:"",
    country:"",
    district:"",
    website_url:"",
    social_media_links:"",
    project_overview:""

  }
  const project_desc = {
    elevator_pitch_video:null,
    how_it_works_video:null,
    funding_goal:"",
    use_of_funds:"",
    business_plan:"",
    financial_statements:"",
    other_documents:"",
    deadline:""


  }
  const founder = {
    project:"",
    name:"",
    role:"",
    email:"",
    phone_number:"",
    linkedin_profile:"",
    bio:"",
  }
  const pitchdeck = {
    project:"",
    problem_name_ru:"",
    problem_description_ru:"",
    probem_name_eng:"",
    problem_description_eng:"",
    probem_name_uz:"",
    problem_description_uz:"",
    problem_image:null,
    solution_name_ru:"",
    solution_description_ru:"",
    solution_name_eng:"",
    solution_description_eng:"",
    solution_name_uz:"",
    solution_description_uz:"",
    solution_image:null   
  }

  const [startUp, setStartUp] = useState(startup_info);
  const [project, setProject] = useState(project_desc);
  const [founder_s, setFounder_s] = useState(founder);
  const [pitchdeck_s, setPitchdek_s] = useState(pitchdeck);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setStartUp({...startUp, [name]:value})

  }
  return (
    <div className=''>
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
                      label={false}
                    >
                      <Step className="nav-link" onClick={()=>setStep(0)}>
                        Startup Information
                      </Step>
                      <Step className="nav-link" onClick={()=>setStep(1)}>
                        Project Description
                      </Step>
                      <Step className="nav-link" onClick={()=>setStep(2)}>
                       Founder
                      </Step>
                      <Step className="nav-link" onClick={()=>setStep(3)}>
                       Pitchdeck
                      </Step>
                      
                    </Stepper>


                    {step===0&&(
                         <form >
                         <div className="row mb-3">
                           <div className="col-md-6">
                             <div className="form-group">
                               <label htmlFor="company" className="form-label">Company</label>
                               <input
                                 type="text"
                                 className="form-control"
                                 id="company"
                                 name="company"
                                 value={startUp.company}
                                 onChange={handleChange}
                                 placeholder="Enter company name"
                               />
                             </div>
                           </div>
                           <div className="col-md-6">
                             <div className="form-group">
                               <label htmlFor="sub_category" className="form-label">Sub Category</label>
                               <input
                                 type="text"
                                 className="form-control"
                                 id="sub_category"
                                 name="sub_category"
                                 value={startUp.sub_category}
                                 onChange={handleChange}
                                 placeholder="Enter sub category"
                               />
                             </div>
                           </div>
                         </div>
                 
                         <div className="row mb-3">
                           <div className="col-md-6">
                             <div className="form-group">
                               <label htmlFor="startup_name" className="form-label">Startup Name</label>
                               <input
                                 type="text"
                                 className="form-control"
                                 id="startup_name"
                                 name="startup_name"
                                 value={startUp.startup_name}
                                 onChange={handleChange}
                                 placeholder="Enter startup name"
                               />
                             </div>
                           </div>
                           <div className="col-md-6">
                             <div className="form-group">
                               <label htmlFor="tagline" className="form-label">Tagline</label>
                               <input
                                 type="text"
                                 className="form-control"
                                 id="tagline"
                                 name="tagline"
                                 value={startUp.tagline}
                                 onChange={handleChange}
                                 placeholder="Enter tagline"
                               />
                             </div>
                           </div>
                         </div>
                 
                         <div className="row mb-3">
                           <div className="col-md-6">
                             <div className="form-group">
                               <label htmlFor="country" className="form-label">Country</label>
                               <input
                                 type="text"
                                 className="form-control"
                                 id="country"
                                 name="country"
                                 value={startUp.country}
                                 onChange={handleChange}
                                 placeholder="Enter country"
                               />
                             </div>
                           </div>
                           <div className="col-md-6">
                             <div className="form-group">
                               <label htmlFor="district" className="form-label">District</label>
                               <input
                                 type="text"
                                 className="form-control"
                                 id="district"
                                 name="district"
                                 value={startUp.district}
                                 onChange={handleChange}
                                 placeholder="Enter district"
                               />
                             </div>
                           </div>
                         </div>
                 
                         <div className="row mb-3">
                           <div className="col-md-6">
                             <div className="form-group">
                               <label htmlFor="website_url" className="form-label">Website URL</label>
                               <input
                                 type="text"
                                 className="form-control"
                                 id="website_url"
                                 name="website_url"
                                 value={startUp.website_url}
                                 onChange={handleChange}
                                 placeholder="Enter website URL"
                               />
                             </div>
                           </div>
                           <div className="col-md-6">
                             <div className="form-group">
                               <label htmlFor="social_media_links" className="form-label">Social Media Links</label>
                               <input
                                 type="text"
                                 className="form-control"
                                 id="social_media_links"
                                 name="social_media_links"
                                 value={startUp.social_media_links}
                                 onChange={handleChange}
                                 placeholder="Enter social media links"
                               />
                             </div>
                           </div>
                         </div>
                 
                         <div className="mb-3">
                           <div className="form-group">
                             <label htmlFor="project_overview" className="form-label">Project Overview</label>
                             <textarea
                               className="form-control"
                               id="project_overview"
                               name="project_overview"
                               rows="3"
                               value={startUp.project_overview}
                               onChange={handleChange}
                               placeholder="Enter project overview"
                             ></textarea>
                           </div>
                         </div>
                 
                         <button type="submit" className="btn btn-primary">Submit</button>
                       </form>
                    )}
                    
                    {step===1&&(
                        <div>
                            hello1
                            <button onClick={()=>setStep(0)}>Pervious</button>
                            <button onClick={()=>setStep(2)}>Next</button>
                        </div>
                    )}
                    {step===2&&(
                        <div>
                            hello2
                            <button onClick={()=>setStep(1)}>Pervious</button>
                            <button onClick={()=>setStep(3)}>Next</button>
                        </div>
                    )}
                    {step===3&&(
                        <div>
                            hello3
                            <button onClick={()=>setStep(2)}>Pervious</button>
                            <button onClick={()=>setStep(3)}>Next</button>
                        </div>
                    )}
                    </div>
                    </div>
                </div>
            </div>
           <form action="">
         
           </form>
          </div>
        </section>
      </div>
    </div>
  )
}
