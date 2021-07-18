import React from "react";
import "./JobCard.css";


const JobCard = ({ job }) => (
    <div className="JobCard">
        {job.id}<br/>
        {job.title}<br />

        {job.equity}<br />

        {job.salary}<br />

        {job.companyHandle}<br />

    </div> 
);
export default JobCard