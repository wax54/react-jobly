import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import joblyApi from "../api";

const CompanyDetail = () => {
    const handle = useParams().handle;
    const [ company, setCompany ] = useState({});

    useEffect( () => {
        async function getCompany(){
            try {
                const company = await joblyApi.getCompany(handle);
                setCompany(company);
            } catch (e) {
                setCompany(false)
            }
        }

        getCompany();
    }, [handle]);
    
    if(company === false) return <Redirect to="/companies" />;
    else {
        const {name, description, numEmployees, logoUrl} = company;
        return (
            <div className="Company">
                <div>{ name }</div>
                <div>{ description }</div>
                <div>{ numEmployees }</div>
                <img src={ logoUrl } />
            </div>
        )
    }
};
export default CompanyDetail