import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'

export default function Step() {
  const [key, setKey]=useState("main")
  return (
    <>
     <section>
        <div class="container">
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="main" title="Main">
        Tab content for Home
      </Tab>
      <Tab eventKey="bank-details" title="Bank details">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact-informations" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
        </div>
     </section>
    </>
  )
}
