import React from 'react';
import {  Route, Routes, Outlet  } from 'react-router-dom';

import ScrollToTop from './../layouts/ScrollToTop';
import Header from './../layouts/Header';
import Footer from './../layouts/Footer';
import Home from './Home';
import Home2 from './Home2';
import Home3 from './Home3';
import AboutUs from './AboutUs';
import Volunteer from './Volunteer';
import BecomeVolunteer from './BecomeVolunteer';
import Faq from './Faq';
import Certificates from './Certificates';
import AskQuestion from './AskQuestion';
import HappyClients from './HappyClients';
import HowItWorks from './HowItWorks';
import Mission from './Mission';
import TermsCondition from './TermsCondition';
import Error from './Error';
import UnderMaintenance from './UnderMaintenance';
import ComingSoon from './ComingSoon';
import BrowseFundraiser from './BrowseFundraiser';
import BecomeFundraiser from './BecomeFundraiser';
import FundraiserDetail from './FundraiserDetail';
import Project from './Project';
import ProjectCategories from './ProjectCategories';
import ProjectSidebar from './ProjectSidebar';
import ProjectStory from './ProjectStory';
import Blog from './Blog';
import BlogGrid from './BlogGrid';
import BlogList from './BlogList';
import BlogDetails from './BlogDetails';
import ContactUs from './ContactUs';
import Step from "./Step"

function Index(){
	return(
		<>
			<Routes>
				<Route path='/error-404' exact element={<Error />} />
				<Route path='/under-maintenance' exact element={<UnderMaintenance />} /> 
				<Route path='/coming-soon' exact element={<ComingSoon />} />
				<Route path='/index-2' exact element={<Home2 />} />
				<Route path='/index-3' exact element={<Home3 />} />
				<Route  element={<MainLayout />} > 
					<Route path='/' exact element={<Home />} />
					<Route path='/about-us' exact element={<AboutUs />} />
					<Route path='/volunteer' exact element={<Volunteer />} />
					<Route path='/become-a-volunteer' exact element={<BecomeVolunteer />} />
					<Route path='/faq' exact element={<Faq />} />
					<Route path='/certificates' exact element={<Certificates />} />
					<Route path='/ask-a-question' exact element={<AskQuestion />} />
					<Route path='/happy-clients' exact element={<HappyClients />} />
					<Route path='/how-it-works' exact element={<HowItWorks />} />
					<Route path='/mission' exact element={<Mission />} />
					<Route path='/terms-and-condition' exact element={<TermsCondition />} />
					<Route path='/browse-fundraiser' exact element={<BrowseFundraiser />} />
					<Route path='/become-a-fundraiser' exact element={<BecomeFundraiser />} />
					<Route path='/fundraiser-detail' exact element={<FundraiserDetail />} />
					<Route path='/investing' exact element={<Project />} />
					<Route path='/project-categories' exact element={<ProjectCategories />} />
					<Route path='/project-sidebar' exact element={<ProjectSidebar />} />
					<Route path='/project-story' exact element={<ProjectStory />} />
					<Route path='/blog' exact element={<Blog />} />
					<Route path='/blog-grid' exact element={<BlogGrid />} />
					<Route path='/blog-list' exact element={<BlogList />} />
					<Route path="/step" element={<Step/>}/>
					<Route path='/blog-details' exact element={<BlogDetails />} />
					<Route path='/contact-us' exact element={<ContactUs />} />
				</Route>
			</Routes>	
			<ScrollToTop />
		</>
		 		
	)
} 

function MainLayout(){
	
	return (
		<div className="page-wraper">
			<Header />
			<Outlet /> 
			<Footer />
		</div>
	)
  
  };
export default Index;