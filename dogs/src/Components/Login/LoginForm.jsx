import React from "react";
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'

import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
/*import { TOKEN_POST, USER_GET } from "../../api";*/
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const {userLogin, error, loading} = React.useContext(UserContext)


  /*React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if(token) {
      getUser(token)
    }
  }, [])*/



  /*async function getUser(token) {
    const {url, options} = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json)
  }*/

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      
      userLogin(username.value, password.value)

      /*const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value
      });

      const response = await fetch(url, options);
    
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token)
      console.log(json);*/
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name="username" label="User" type="text" {...username} />
        <Input name="password" label="Password" type="password" {...password} />
        {loading ? <Button disabled>Loading...</Button> : <Button>Enter</Button> }
        <Error error={error}/>
      </form>
      <Link className={styles.perdeu} to='/login/perdeu'>Forgot Password?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Sign Up</h2>
        <p>Don't you have an account yet? Create one.</p>
        <Link className={stylesBtn.button} to="/login/criar">Sign Up</Link>
      </div>
      
    </section>
  );
};

export default LoginForm;
