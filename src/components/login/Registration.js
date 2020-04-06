import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

const Registration = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
    };

    return (
        <form className="form" style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>

            <h1>Registration</h1>
            <input
                className="input"
                name="email"
                placeholder="Enter email id"
                ref={register({
                    required: 'Required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                    }
                })}
            />
            {errors.email && errors.email.message}
            <br />
            <input
                className="input"
                name="username"
                placeholder="Enter username"
                ref={register({
                    validate: value => value !== "jitu" || "Nice try!"
                })}
            />
            {errors.username && errors.username.message}
            <br />
            <input
                className="input"
                name="password1"
                placeholder="password"
                ref={register({
                    required: 'Required',
                })}
            ></input>
            <br />
            <input
                className="input"
                name="password2"
                placeholder="re-password"
                ref={register({
                    required: 'Required',
                })}
            ></input>
            <br />
            <Button style={{ width: '80%' }} variant="success" type="submit">Sign up</Button>
        </form>
    );
};

export default Registration