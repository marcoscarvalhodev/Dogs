import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
/*import { TOKEN_POST, USER_GET } from "../../api";*/
import { UserContext } from "../../UserContext";

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
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input name="username" label="User" type="text" {...username} />
        <Input name="password" label="Password" type="password" {...password} />
        {loading ? <Button disabled>Loading...</Button> : <Button>Enter</Button> }
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
