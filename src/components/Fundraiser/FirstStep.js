const FirstStep = () => {
  return (
    <>
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
              placeholder="Enter logo URL"
            />
          </div>

          {/* Legal Name */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="legalName" className="form-label">
              Legal Name
            </label>
            <input
              type="text"
              className="form-control"
              id="legalName"
              placeholder="Enter legal name"
            />
          </div>

          {/* TIN */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tin" className="form-label">
              TIN
            </label>
            <input
              type="text"
              className="form-control"
              id="tin"
              placeholder="Enter TIN"
            />
          </div>

          {/* Date of Registration */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="registrationDate" className="form-label">
              Date of Registration
            </label>
            <input type="date" className="form-control" id="registrationDate" />
          </div>

          {/* National Classifier of Activities */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="nationalClassifier" className="form-label">
              National Classifier of Activities
            </label>
            <input
              type="text"
              className="form-control"
              id="nationalClassifier"
              placeholder="Enter National Classifier"
            />
          </div>

          {/* Legal Address */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="legalAddress" className="form-label">
              Legal Address
            </label>
            <input
              type="text"
              className="form-control"
              id="legalAddress"
              placeholder="Enter legal address"
            />
          </div>

          {/* Name of Director */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="directorName" className="form-label">
              Name of Director
            </label>
            <input
              type="text"
              className="form-control"
              id="directorName"
              placeholder="Enter director's name"
            />
          </div>

          {/* Director TIN */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="directorTIN" className="form-label">
              Director TIN
            </label>
            <input
              type="text"
              className="form-control"
              id="directorTIN"
              placeholder="Enter director's TIN"
            />
          </div>

          {/* Share Capital */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="shareCapital" className="form-label">
              Share Capital
            </label>
            <input
              type="text"
              className="form-control"
              id="shareCapital"
              placeholder="Enter share capital"
            />
          </div>

          {/* State of Activity */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="stateOfActivity" className="form-label">
              State of Activity
            </label>
            <input
              type="text"
              className="form-control"
              id="stateOfActivity"
              placeholder="Enter state of activity"
            />
          </div>

          {/* Number of Employees */}
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="numberOfEmployees" className="form-label">
              Number of Employees
            </label>
            <input
              type="number"
              className="form-control"
              id="numberOfEmployees"
              placeholder="Enter number of employees"
            />
          </div>

        
      </div>
    </>
  );
};

export default FirstStep;
