import React from "react";

import './App.css'
import {orginals,action,comedy,horror,romance,document} from './url'
import Navbar from "./components/navbar/navbar"; // Ensure the path is correct
import Banner from "./components/banner/banner"; // Ensure the path is correct
import RowPost from "./components/rowcost/rowpost";
function App() {
  return (
    <div className="App">
         <Navbar/>
         <Banner/>
         <RowPost url={orginals} title='Netflix Orginals'/>
         <RowPost url={action} title='Action Movies' issmall/>
         <RowPost url={comedy} title='Comedy Movies' issmall/>
         <RowPost url={horror} title='Horror Movies' issmall/>
         <RowPost url={romance} title='Romance' issmall/>
         <RowPost url={document} title='Documenteries' issmall/>
    </div>
  );
}

export default App;
