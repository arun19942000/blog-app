import React, { useState, useEffect } from 'react';
import './Signup.css'
import validation from './Loginvalidation';
import Home from '../home/Home';


function Login(props) {
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [FormErrorValues, setFormErrorValues] = useState({})
    const [Issubmit, setIssubmit] = useState(false);
    ; const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target; //destructuring
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrorValues(validation(formValues));
        setIssubmit(true);
    }
    useEffect(() => {
        if (Object.keys(FormErrorValues).length === 0 && Issubmit) {
            alert("success");

        }
    }, [FormErrorValues]);

    return (
        <div>
            {Object.keys(FormErrorValues).length === 0 && Issubmit ? (<Home />) : <pre></pre>}
            <br></br>
            <br></br>
            <br></br>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange} />
                    <p>{FormErrorValues.email}</p>
                    <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
                    <p>{FormErrorValues.password}</p>
                    <button onClick={validation}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;