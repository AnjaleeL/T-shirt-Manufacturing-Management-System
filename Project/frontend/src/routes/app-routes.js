import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import{
	AddCompany,
	AddDelivery,
	Updatecompany,
	UpdateStatus,
	AddStatus
	
}from "../pages"

function App() {
	return (
		<>
			<Router>
				<NavBar /> 

				<Routes>

					<Route path="/companyadd" element={<AddCompany/>}/>

					<Route path="/delivery" element = {<AddDelivery/>}/>

					<Route path="/updatecompany/:id" element = {<Updatecompany/>}/>

					<Route path="/status" element = {<	AddStatus/>}/>
					<Route path="/updatestatus/:id" element = {<UpdateStatus/>}/> 


					

				</Routes>

				<Footer /> 

			</Router>
		</>
	);
}

export default App;
