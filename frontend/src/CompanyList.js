import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import joblyApi from "./api";

const CompanyList = () => {
    const [ companies, setCompanies ] = useState([]);

    const [query, setQuery] = useState({});
    useEffect( () => {
        async function getCompanies() {
            const companies = await joblyApi.getCompanies();
            setCompanies(companies);
        }
        getCompanies();
    }, []);

    return (
    <div className="CompanyList">
        {companies.length 
            ? companies.map(comp => <CompanyCard company={comp} key={comp.handle}/>)
            : <p>Loading Companies</p>}
    </div> 
    )
};
export default CompanyList