import React, { useEffect, useState } from "react";

const SecondStep = ({setData}) => {
  const initialState = {
    name_of_bank: "",
    MFO: "",
    account_number_1: "",
    account_number_2: "",
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
  },[setData, formState])
  return (
    <>
    <form action="">
      <div id="wizard_Service" className="tab-pane  row" role="tabpanel">
        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="name_of_bank" className="form-label">
            Name Of Bank
          </label>
          <input
            type="text"
            className="form-control"
            id="name_of_bank"
            name="name_of_bank"
            placeholder="Name Of Bank"
            value={formState.name_of_bank}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="MFO" className="form-label">
            MFO
          </label>
          <input
            type="text"
            className="form-control"
            id="MFO"
            name="MFO"
            placeholder="MFO"
            value={formState.MFO}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="account_number_1" className="form-label">
            Account Number 1
          </label>
          <input
            type="text"
            className="form-control"
            id="account_number_1"
            name="account_number_1"
            placeholder="Account Number 1"
            value={formState.account_number_1}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="account_number_1" className="form-label">
            Account Number 2
          </label>
          <input
            type="text"
            className="form-control"
            id="account_number_2"
            name="account_number_2"
            placeholder="Account Number 2"
            value={formState.account_number_2}
            onChange={handleChange}
          />
        </div>
        {/* Logo */}
      </div>
    </form>
    </>
  );
};

export default SecondStep;
