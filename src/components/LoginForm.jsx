import { useState } from "react";
import {useNavigate} from "react-router-dom";

function LoginForm() {
  const [value, setValue] = useState("");
  const navigate = useNavigate()

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
    navigate(`order/${value}`)
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <input
        type="text"
        value={value}
        placeholder="Entrez votre prénom..."
        required
        onChange={onChange}
      /> 
      <button type="submit">Accéder à votre espace</button>
    </form>
  );
}

export default LoginForm;
