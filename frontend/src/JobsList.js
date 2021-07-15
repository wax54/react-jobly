import React from "react";
import Search from "./Search";

const JobsList = ({ jobs }) => (
    <div className="JobsList">
        <Search list={jobs}/>
        Hi Im the JobsList Component

    </div> 
);
export default JobsList