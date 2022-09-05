import Card from "../Card/card"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEventos} from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../Paginate/paginate"

const Home = () => {
    const dispatch = useDispatch();
    const eventos = useSelector(state => state.eventos);

    const [currentPage, setCurrentPage] = useState(1); 
    const [eventosPerPage] = useState(4);
    const indexOfLastEventos = currentPage * eventosPerPage; 
    const indexOfFirstEventos = indexOfLastEventos - eventosPerPage; 

    const currentEventos = eventos.slice(
        indexOfFirstEventos,
        indexOfLastEventos
    );

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => { 
        dispatch(getEventos()) 
    }, [dispatch]) 


    return (
        <div>
          <Paginado
            eventosPerPage={eventosPerPage}
            eventos={eventos.length}
             paginado={paginado}
        />  
        <div >
        {currentEventos.length ?
             currentEventos.map(e => {
                return ( 
                    <div key={e.id}>
                        <Link to={"/eventos/" + e.id}>
                     <Card
                         title={e.title}
                         shortDescription={e.shortDescription}
                         organizer={e.organizer}
                         dates={e.date}
                         place={e.place}
        />
        </Link>
        </div> 
                )
             }) : <h4>Cargando</h4>}
        </div>
        </div>
    )  
}


export default Home;