import { useState } from "react";

function LoginForm() {
    const [value, setValue]= useState("");

    const onChange = (e)=>{
        setValue(e.target.value);
    }
    const onSubmit=()=>{
        //e.preventDefault();
        alert(value);
        //setValue("");
    }
    return (
        <>
          <h1>Bienvenue chez nous !</h1>
          <h2>Connectez-vous</h2>
          <form onSubmit={onSubmit}>
            <input type='text'  placeholder='Entrez votre prénom...' required onChange={onChange} />
            <input type="submit" value="Accéder à votre espace" />
          </form> 
        </>
    );
}

export default LoginForm;