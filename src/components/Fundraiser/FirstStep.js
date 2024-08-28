import React, { useEffect, useState } from 'react';

const FirstStep = ({setData}) => {
  const main_state = {
    legal_name: "",
    TIN: "",
    date_of_registration: "",
    national_classifier_of_activies: "",
    legal_address: "",
    name_of_director: "",
    director_TIN: "",
    share_capital: "",
    state_of_activity: "",
    number_of_employees: "",
    logo: null,
  };

  const [state, setState] = useState(main_state);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleFileChange = (e) => {
    setState({ ...state, logo: e.target.files[0] });
  };
  useEffect(()=>{
    setData(state)
  },[setData,state])

  return (
    <>
      <form>
        <div id="wizard_Time" className="tab-pane row" role="tabpanel">
          {/* Logo */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="logo" className="form-label">
              Logo URL
            </label>
            <input
              type="file"
              className="form-control"
              id="logo"
              name="logo"
              onChange={handleFileChange}
            />
          </div>

          {/* Legal Name */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="legal_name" className="form-label">
              Legal Name
            </label>
            <input
              type="text"
              className="form-control"
              id="legal_name"
              name="legal_name"
              value={state.legal_name}
              onChange={handelChange}
              placeholder="Enter legal name"
            />
          </div>

          {/* TIN */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="TIN" className="form-label">
              TIN
            </label>
            <input
              type="text"
              className="form-control"
              id="TIN"
              name="TIN"
              value={state.TIN}
              onChange={handelChange}
              placeholder="Enter TIN"
            />
          </div>

          {/* Date of Registration */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="date_of_registration" className="form-label">
              Date of Registration
            </label>
            <input
              type="text"
              className="form-control"
              id="date_of_registration"
              name="date_of_registration"
              value={state.date_of_registration}
              onChange={handelChange}
            />
          </div>

          {/* National Classifier of Activities */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="national_classifier_of_activies" className="form-label">
              National Classifier of Activities
            </label>
            <input
              type="text"
              className="form-control"
              id="national_classifier_of_activies"
              name="national_classifier_of_activies"
              value={state.national_classifier_of_activies}
              onChange={handelChange}
              placeholder="Enter National Classifier"
            />
          </div>

          {/* Legal Address */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="legal_address" className="form-label">
              Legal Address
            </label>
            <input
              type="text"
              className="form-control"
              id="legal_address"
              name="legal_address"
              value={state.legal_address}
              onChange={handelChange}
              placeholder="Enter legal address"
            />
          </div>

          {/* Name of Director */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="name_of_director" className="form-label">
              Name of Director
            </label>
            <input
              type="text"
              className="form-control"
              id="name_of_director"
              name="name_of_director"
              value={state.name_of_director}
              onChange={handelChange}
              placeholder="Enter director's name"
            />
          </div>

          {/* Director TIN */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="director_TIN" className="form-label">
              Director TIN
            </label>
            <input
              type="text"
              className="form-control"
              id="director_TIN"
              name="director_TIN"
              value={state.director_TIN}
              onChange={handelChange}
              placeholder="Enter director's TIN"
            />
          </div>

          {/* Share Capital */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="share_capital" className="form-label">
              Share Capital
            </label>
            <input
              type="text"
              className="form-control"
              id="share_capital"
              name="share_capital"
              value={state.share_capital}
              onChange={handelChange}
              placeholder="Enter share capital"
            />
          </div>

          {/* State of Activity */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="state_of_activity" className="form-label">
              State of Activity
            </label>
            <input
              type="text"
              className="form-control"
              id="state_of_activity"
              name="state_of_activity"
              value={state.state_of_activity}
              onChange={handelChange}
              placeholder="Enter state of activity"
            />
          </div>

          {/* Number of Employees */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="number_of_employees" className="form-label">
              Number of Employees
            </label>
            <input
              type="text"
              className="form-control"
              id="number_of_employees"
              name="number_of_employees"
              value={state.number_of_employees}
              onChange={handelChange}
              placeholder="Enter number of employees"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default FirstStep;
