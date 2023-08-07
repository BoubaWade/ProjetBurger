import { NavLink, useParams } from "react-router-dom"
//import styled  from "styled-components";

export default function OrderPage() {
  const {username} = useParams();
  
  return (
    <div>
      <h2>Bonjour {username}</h2>
      <NavLink to={"/"}>
        <button>Déconnexion</button>
      </NavLink>
    </div>
  )
}

