import React from "react";
import "../css/Candidate.css"
const Candidate = ({ title, tenants, income, visiting_date }) => {
    const displayTenants = tenants.map((tenant) => {
        return <div className="tenant">
            <img src={tenant.image} alt="profil_picture" />
            <div className="column">
                <div className="tenant_name">{tenant.name}</div>
                <div className="job"> {tenant.job}</div>
            </div>

        </div>
    })
    return (
        <div className="box">
            <div className="title">{title}</div>
            <div className="tenants">  {displayTenants} </div>
            <div className="income">
                <div className="fw-bold"> Revenu mensuel moyen</div>
                <div className="income_data">
                    <div className="candidates">Candidats  <div className="income_value">{income.candidates}€</div> </div>
                    <div className="guarantor">Garants  <div className="income_value">{income.guarantor}€</div></div>
                </div>
            </div>
            <button className="btn btn-primary btn-sm see_more_btn">Voir Plus</button>
            <div className="visiting_date"> Visite du {visiting_date.day} à {visiting_date.hour}</div>
        </div>
    );
}

export default Candidate