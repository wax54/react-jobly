import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import joblyApi from "./api";

const CompanyDetail = () => {
    const handle = useParams().handle;
    const [ company, setCompany ] = useState({});

    useEffect( () => {
        async function getCompany(){
            const company = await joblyApi.getCompany(handle);
            setCompany(company);
        }
        getCompany();
    }, [handle]);

    const {name, description, numEmployees, logoUrl} = company;

    return (
        <div className="Company">
            <div>{ name }</div>
            <div>{ description }</div>
            <div>{ numEmployees }</div>
            <img src={ logoUrl } />
        </div>
    )
};
export default CompanyDetail