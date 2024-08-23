import React,{useState} from 'react';
import {Dropdown} from 'react-bootstrap';

const FourthStep = () => {
    const [dropbtn,setDropbtn] = useState('Does Not Require Hospitalisation');
    const [dropbtn2,setDropbtn2] = useState('40 Year');
    return (
        <>
            <div id="wizard_info" className="tab-pane" role="tabpanel">
                <h4 className="title">Tell Me about Patient</h4>
                <div className="row">
                    <div className="col-md-12">
                        <label className="form-label">Name</label>
                        <div className="input-group">
                            <input name="dzName" required="" type="text" className="form-control" placeholder="Name" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Phone Number</label>
                        <div className="input-group">
                            <input name="dzPhoneNumber" required="" type="text" className="form-control" placeholder="832141251" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Medical Condition</label>
                        <div className="clearfix m-b0 m-b20 m-sm-b10">                            
                            <Dropdown className="select-drop">
                                <Dropdown.Toggle as="div" className="i-false select-drop-btn">
                                    <span>{dropbtn}</span>
                                    <i className="fa-regular fa-angle-down"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>setDropbtn('Does Not Require Hospitalisation')}>Does Not Require Hospitalisation</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setDropbtn('Require Hospitalisation')}>Require Hospitalisation</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Age</label>
                        <div className="clearfix m-b0 m-b20 m-sm-b10">
                            <Dropdown className="select-drop">
                                <Dropdown.Toggle as="div" className="i-false select-drop-btn">
                                    <span>{dropbtn2}</span>
                                    <i className="fa-regular fa-angle-down"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>setDropbtn2('40 Years')}>40 Years</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setDropbtn2('50 Years')}>50 Years</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Enter Your City</label>
                        <div className="input-group">
                            <input name="dzName" required="" type="text" className="form-control" placeholder="Kota,Rajathan,India" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FourthStep;