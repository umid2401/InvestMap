import React, { Fragment } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import ScrollToTop from "./../layouts/ScrollToTop";
// import Header from "./../layouts/Header";
import Footer from "./../layouts/Footer";
import Home from "./Home";
import Investing from "./Project";

import AboutUs from "./AboutUs";
import Volunteer from "./Volunteer";
import BecomeVolunteer from "./BecomeVolunteer";
import Faq from "./Faq";
import Certificates from "./Certificates";
import AskQuestion from "./AskQuestion";
import HappyClients from "./HappyClients";
import HowItWorks from "./HowItWorks";
import Mission from "./Mission";
import TermsCondition from "./TermsCondition";
import Error from "./Error";
import UnderMaintenance from "./UnderMaintenance";
import ComingSoon from "./ComingSoon";
import BrowseFundraiser from "./Events";
import BecomeFundraiser from "./Company";
import FundraiserDetail from "./FundraiserDetail";

import Blog from "./News";
import BlogGrid from "./BlogGrid";
import BlogList from "./BlogList";
import BlogDetails from "./BlogDetails";
import ContactUs from "./ContactUs";
import Raising from "./Raising";
import Academy from "./Academy";
import Home2 from "./Raising";
import Home3 from "./Academy";
import Resources from "./Resources";
import Events from "./Events";
import News from "./News"
import Company from "./Company"
import HeaderNew from "../layouts/HeaderNew";

function Index() {
  return (
    <>
      <Routes>
        <Route path="*" exact element={<Error />} />
        <Route path="/under-maintenance" exact element={<UnderMaintenance />} />
        <Route path="/coming-soon" exact element={<ComingSoon />} />

        <Route element={<MainLayout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/volunteer" exact element={<Volunteer />} />
          <Route
            path="/become-a-volunteer"
            exact
            element={<BecomeVolunteer />}
          />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/certificates" exact element={<Certificates />} />
          <Route path="/ask-a-question" exact element={<AskQuestion />} />
          <Route path="/happy-clients" exact element={<HappyClients />} />
          <Route path="/how-it-works" exact element={<HowItWorks />} />
          <Route path="/mission" exact element={<Mission />} />
          <Route
            path="/terms-and-condition"
            exact
            element={<TermsCondition />}
          />
          <Route path="/events" exact element={<Events />} />
          <Route
            path="/company"
            exact
            element={<Company />}
          />
          <Route
            path="/fundraiser-detail"
            exact
            element={<FundraiserDetail />}
          />
          <Route path="/investing" exact element={<Investing />} />

          <Route path="/news" exact element={<News />} />
          <Route path="/blog-grid" exact element={<BlogGrid />} />
          <Route path="/blog-list" exact element={<BlogList />} />

          <Route path="/blog-details" exact element={<BlogDetails />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/raising" exact element={<Raising />} />
          <Route path="/academy" exact element={<Academy />} />
          <Route path="/resource" exact element={<Resources />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </>
  );
}

function MainLayout() {
  return (
    
    <div >

      <HeaderNew />
      <Outlet />
      <Footer />
    </div>

  );
}
export default Index;
