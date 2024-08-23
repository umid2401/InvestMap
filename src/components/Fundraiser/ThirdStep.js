import React from 'react';

const ThirdStep = () => {
    return (
        <>
            <div id="wizard_contact" className="tab-pane row" role="tabpanel">
            <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tin" className="form-label">
          Contac Phone Number 1
            </label>
            <input
              type="number"
              className="form-control"
              id="tin"
              placeholder="Number"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tin" className="form-label">
            Contac Phone Number 2
            </label>
            <input
              type="number"
              className="form-control"
              id="tin"
              placeholder=" Number"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tin" className="form-label">
            Accauntant's phone number
            </label>
            <input
              type="number"
              className="form-control"
              id="tin"
              placeholder="Number"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tin" className="form-label">
            International Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="tin"
              placeholder="Number"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tin" className="form-label">
           Email Adress
            </label>
            <input
              type="email"
              className="form-control"
              id="tin"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tin" className="form-label">
          Website
            </label>
            <input
              type="url"
              className="form-control"
              id="tin"
              placeholder="Website Url"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tin" className="form-label">
           Legal address of the company
            </label>
            <input
              type="text"
              className="form-control"
              id="tin"
              placeholder="Legal Adress"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tin" className="form-label">
            The physical adress of the company
            </label>
            <input
              type="text"
              className="form-control"
              id="tin"
              placeholder="The physical adress"
            />
          </div>
            </div>
        </>
    );
};

export default ThirdStep;