import axios from "axios";
export const GET_EVENTOS = "GET_EVENTOS"
export const GET_DETAILS = "GET_DETAILS"





export function getEventos() {
    return async function(dispatch){
      let json= await axios.get("http://localhost:3001/eventos");
      return dispatch({
        type:GET_EVENTOS,
        payload : json.data
      })
    }
}    

export function getEventosId(id) {
    return async function(dispatch){
      let json=await axios.get(`http://localhost:3001/eventos/${id}`)
      return dispatch({
        type : GET_DETAILS,
        payload : json.data
      })
    }
  }