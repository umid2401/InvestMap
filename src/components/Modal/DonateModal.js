import React,{useState, forwardRef,useImperativeHandle} from 'react';
import {useNavigate} from 'react-router-dom';
import {Modal} from 'react-bootstrap';


const DonateModal = forwardRef((props, ref) => {
    const [donateModal,setDonateModal] = useState(false);
    useImperativeHandle(ref, () => ({
		handleModalOpen(){
			setDonateModal(true);
		}
	}));
    function handleModalClose(){
		setDonateModal(false);
	}
	
    const nav = useNavigate();
    const FormSubmit = (e) => {
        e.preventDefault();
        nav("/contact-us");
    };
    return(    
        <Modal className="fade modal-wrapper" id="modalDonate" show={donateModal} onHide={setDonateModal} centered> 
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Choose a donation amount</h5>
                    <button type="button" className="btn-close" onClick={() => handleModalClose()}><i className="flaticon-close"></i></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={(e)=>FormSubmit(e)}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tag-donate style-1">
                                    <div className="donate-categories">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                $500
                                            </label>
                                        </div>
                                    </div>
                                    <div className="donate-categories">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked  />
                                            <label className="form-check-label" htmlFo="flexRadioDefault2">
                                                $1000
                                            </label>
                                        </div>
                                    </div>
                                    <div className="donate-categories">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                                            <label className="form-check-label" htmlFo="flexRadioDefault3">
                                                $2000
                                            </label>
                                        </div>
                                    </div>
                                    <div className="donate-categories">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" defaultChecked />
                                            <label className="form-check-label" htmlFo="flexRadioDefault4">
                                                $5000
                                            </label>
                                        </div>
                                    </div>
                                    <p>Most Donors donate approx <span>$1000</span> to this Fundraiser</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Other Amount</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control"  placeholder="Other Amount" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <div className="input-group">
                                        <input name="dzName" required="" type="text" className="form-control" placeholder="Jakob Bothman" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Email address</label>
                                    <div className="input-group">
                                        <input name="dzEmail" required type="text" className="form-control" placeholder="info@mail.com" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Address</label>
                                    <div className="input-group">
                                        <input required type="text" className="form-control" placeholder="Address" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Pancard</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="Pancard" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-0 text-center">
                                    <button name="submit" type="submit" value="Submit" className="btn btn-primary btn-block">Proceed To Pay</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>                
        </Modal>   
    );
});
export default DonateModal;