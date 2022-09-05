import React from "react"
import "./card.css";

export default function Card({ title, shortDescription, organizer, date, place}) {
    return(
        <div className="card">
            <h3>{title}</h3>
            <div className="diets-container">
            <h4>{shortDescription}</h4>
            <h5>{organizer}</h5>
            <h4>{date}</h4>
            <h1>{place}</h1>
            </div>
        </div>
    );
}