import { NavLink } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div>
      <h1>ErrorPage</h1>
        <NavLink to={"/"}>
            <input type="submit" value="Re-tourner vers la page d'accueil" />
        </NavLink>
    </div>
  );
}
