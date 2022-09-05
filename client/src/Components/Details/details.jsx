import React, { useEffect } from "react";
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import "./details.css"
import {getEventosId} from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
    const dispatch = useDispatch();
    const eventosId = useSelector(state => state.eventosId);
    const {id} = useParams();
    
    useEffect ( ()=> {  dispatch(getEventosId(id)) 
    },[id])

        

    return eventosId?
    (
        <div className="detail-background">
        <div className="home">
            <Link to = "/">
                <button className="btn">Home</button>
                </Link>
                </div>

            <div  className="detalle" key={eventosId.id}>
                <h2>Title: {eventosId.title}</h2>
                
                <h3>ShortDescription: {eventosId.shortDescription}</h3>

                <h3>LongDescription: {eventosId.longDescription}</h3>

                <h3>Date: {eventosId.date}</h3>

                <h3>organizer: {eventosId.organizer}</h3>

                <h3>place: {eventosId.placedate}</h3>

                <h3>state: {eventosId.state}</h3>
            </div>
        </div>
        ): <h1>CARGANDO</h1>
}

export default Details