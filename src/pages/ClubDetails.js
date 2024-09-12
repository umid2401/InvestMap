import React from "react";
import { Container, Tab, Table, Tabs } from "react-bootstrap";
import newlogo from "./../assets/images/logo-landing.png";
export default function ClubDetails() {
  return (
    <div className="container my-3">
      <div className="card ">
        <div class="row row d-flex  align-items-start justify-content-between">
          <div className="col-md-3 w-25 ">
            <img src={newlogo} alt="Not found" />
          </div>
          <div className="col-md-9 d-flex  flex-wrap gap-x-5 style-1 widget_fund ">
            <p className="me-4">
              Name: <span className="fs-6">Project Name</span>
            </p>
            <p className="me-4">
              Type: <span className="fs-6">Project Type</span>
            </p>
         
            <p className="me-4">
              Minmax: <span className="fs-6">Project Name</span>
            </p>
            <p className="">
              Description: <span className="fs-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, sint?</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <Tabs
          defaultActiveKey="member"
          id="justify-tab-example"
          variant="pills"
          className="mb-3 col card-container"
          justify
        >
          <Tab eventKey="member" title="Members">
          <Container className="mt-4">
      <div className="table-responsive">
        <Table  hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Country</th>
              <th>LinkedIn Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>USA</td>
              <td><a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">View Profile</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>UK</td>
              <td><a href="https://linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer">View Profile</a></td>
            </tr>
            {/* Qo'shimcha satrlar qo'shishingiz mumkin */}
          </tbody>
        </Table>
      </div>
    </Container>
  
          </Tab>
          <Tab eventKey="project" title="Projects">
          <Container className="mt-4">
      <div className="table-responsive">
        <Table  hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Project</th>
              <th>Name</th>
              <th>Funding goal</th>
              <th>Amount/Person</th>
              <th>Wiew</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>USA</td>
              <td><a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">View Profile</a></td>
              <td>19</td>
              <td><a href="">Wiew</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>UK</td>
              <td><a href="https://linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer">View Profile</a></td>
              <td>19</td>
              <td><a href="">Wiew</a></td>
            </tr>
            {/* Qo'shimcha satrlar qo'shishingiz mumkin */}
          </tbody>
        </Table>
      </div>
    </Container>
          </Tab>
          <Tab eventKey="Owners" title="Owners">
            <div class="card mt-3">
            <div className="d-flex ">
            <div class="style-1 widget_fund py-2 px-5">
            <p>Fullname: <span>Fullnamre</span></p>
            <p>Email: <span>umamatraximov@gmail.com</span></p>
            <p>Phone: <span>+998945142401</span></p>
            </div>
            <div class="style-1 widget_fund py-2 px-5">
            <p>Linkedin: <span>https://linkedin.com/</span></p>
            <p>Count of invest project: <span>Invest</span></p>
            <p>Phone: <span>+998945142401</span></p>
            </div>
            
           </div>
            </div>
          
          </Tab>
          <Tab eventKey="transaction" title="Transactions">
            Project owners
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
