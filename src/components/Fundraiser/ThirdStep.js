import React, { useEffect, useState } from "react";

const ThirdStep = ({setData}) => {
  const initialState = {
    contact_phone_number_1: "",
    accountant_phone_number: "",
    email_address: "",
    legal_address_of_company: "",
    physical_address_of_company: "",
  };

  const [formState, setFormState] = useState(initialState);

  // input qiymatlari o'zgarsa state yangilash uchun
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  useEffect(()=>{
    setData(formState)
  }
  ,[setData,formState])
  return (
    <>
      <div id="wizard_contact" className="tab-pane row" role="tabpanel">
        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="contact_phone_number_1" className="form-label">
            Contact Phone Number 1
          </label>
          <input
            type="text"
            className="form-control"
            id="contact_phone_number_1"
            name="contact_phone_number_1"
            placeholder="Number"
            value={formState.contact_phone_number_1}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="accountant_phone_number" className="form-label">
            Accountant's Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="accountant_phone_number"
            name="accountant_phone_number"
            placeholder="Number"
            value={formState.accountant_phone_number}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="email_address" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email_address"
            name="email_address"
            placeholder="Enter your email"
            value={formState.email_address}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="legal_address_of_company" className="form-label">
            Legal Address of the Company
          </label>
          <input
            type="text"
            className="form-control"
            id="legal_address_of_company"
            name="legal_address_of_company"
            placeholder="Legal Address"
            value={formState.legal_address_of_company}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="physical_address_of_company" className="form-label">
            Physical Address of the Company
          </label>
          <input
            type="text"
            className="form-control"
            id="physical_address_of_company"
            name="physical_address_of_company"
            placeholder="Physical Address"
            value={formState.physical_address_of_company}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
