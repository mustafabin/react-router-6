import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {

	return (
		<>
		<h1>Navbar</h1>

		
		<Routes>
			<Route path="/" element={<h1>root route</h1>}></Route>
			<Route path="/hello" element={<h1>hello route</h1>}></Route>
			<Route path="*" element={<h1>Error route</h1>}></Route>

		</Routes>



		<h1>Footer</h1>

		</>
	);
}

export default App;
