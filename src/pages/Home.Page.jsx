import React from "react";
// import axios from "axios";

// Components
import Slidebar from "../components/Slidebar/Slidebar.Component";
import Dashboard from "../components/Dashboard/Dashboard.Component";

// HOC
import DefaultlayoutHoc from "../layout/Default.Layout";



const HomePage = () => {
  return (
    <div class="container-fluid" id="main">
      <div class="row row-offcanvas row-offcanvas-left">
        <Slidebar />
        {/* <Dashboard /> */}
      </div>
    </div>
  )
}


export default DefaultlayoutHoc(HomePage);

