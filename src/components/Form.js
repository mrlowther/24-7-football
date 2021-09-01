import React, { useState } from 'react';
import { makeStyles, TextField, Typography} from '@material-ui/core';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../utils/helpers';
import { blockStatement, classExpression } from '@babel/types';


function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const useStyles = makeStyles({
    field: {
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
  })

    const classes = useStyles();

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
        setEmail(inputValue);
        } else if (inputType === 'userName') {
        setUserName(inputValue);
        } else {
        setPassword(inputValue);
        }
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();

        if (!validateEmail(email) || !userName) {
        setErrorMessage('Email or username is invalid.');
        return;
        }

        if (!checkPassword(password)) {
        setErrorMessage(`Choose a more secure password for the account: ${userName}.`);
        return;
        }

        setUserName('');
        setPassword('');
        setEmail('');
    };

    return (
    <>
    <div>
        <form noValidate autoComplete="off">

            <TextField
                className = {classes.field}
                label="User Name"
                variant="outlined"
                required
            />

            <TextField
                className = {classes.field}
                label="Email"
                variant="outlined"
                required
            />

            <TextField
                className = {classes.field}
                label="Message"
                variant="outlined"
                required
                multiline
                rows={3}
                fullWidth
            />

        </form>
        <Typography variant="body2">*required field</Typography>
    </div>

    {/*
    <div>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    */}
    </>
  );
}

export default Form;
