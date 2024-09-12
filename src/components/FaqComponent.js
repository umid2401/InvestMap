

import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function FaqComponent({accordBlog}) {
  return (
    <section className="flex justify-content-center my-5 overflow-hidden">
    <div className="container">
      <div className="w-100 align-self-center mx-auto ">
        <div className="section-head m-b30">
          <h2 className="title text-center">FAQ</h2>
        </div>
        <Accordion
          className="accordion dz-accordion accordion-sm"
          id="accordionFaq1"
        >
          {accordBlog&&accordBlog.map((item, index) => (
            <Accordion.Item
              className="accordion-item"
              key={index}
              eventKey={index}
            >
              <Accordion.Header as="h2" id="headingOne1">
                {item.title}
                <span className="toggle-close"></span>
              </Accordion.Header>
              <div
                id="collapseOne1"
                className="accordion-collapse "
                eventKey={index}
              >
                <Accordion.Body>
                  <p className="m-b0">
                    Vestibulum nibh risus, lobortis in neque eleifend,
                    varius vulputate sem. Donec maximus, sapien id auctor
                    ornare, odio mi luctus massa, id rhoncus velit purus
                    eu turpis onec aliquet mauris est.
                  </p>
                </Accordion.Body>
              </div>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
  )
}
