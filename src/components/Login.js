import React from 'react';
import { Grid, Card, CardContent, makeStyles, TextField, Typography, Button} from '@material-ui/core';

const useStyles = makeStyles({
  field: {
      marginRight: 20,
  }
});


function Login() {

    const classes = useStyles();

    return (
    <>
        <Card style={{ maxWidth:500, margin:"0 auto" }}>
            <CardContent>
                <form>
                <Grid container spacing={1}>

                <Grid xs={12} sm={6} item>
                        <TextField
                            className = {classes.field}
                            label="Email"
                            type="email"
                            placeholder="Enter your email."
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </Grid>

                    <Grid xs={12} sm={6} item>
                        <TextField
                            className = {classes.field}
                            label="Password"
                            placeholder="Enter your password."
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </Grid>

                    

                    {/* <Grid xs={12} sm={12} item>
                        <TextField
                            className = {classes.field}
                            label="Message"
                            placeholder="What's on your mind?"
                            variant="outlined"
                            required
                            multiline
                            rows={4}
                            fullWidth
                        />
                    </Grid> */}

                    <Grid xs={12} sm={12} item>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Grid>

                </Grid>

                <Typography variant="body2">*All fields are required.</Typography>
                </form>

            </CardContent>
        </Card>
    </>
  );
}

export default Login;


// import React, { useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from 'react-router-dom';

// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";

// import { login } from "../actions/auth";

// const required = (value) => {
//     if (!value) {
//         return (
//             <div className="alert alert-danger" role="alert">
//                 This field is required!
//             </div>
//         );
//     }
// };

// const Login = (props) => {
//     const form = useRef();
//     const checkBtn = useRef();

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);

//     const { isLoggedIn } = useSelector(state => state.auth);
//     const { message } = useSelector(state => state.message);

//     const dispatch = useDispatch();

//     const onChangeUsername = (e) => {
//         const username = e.target.value;
//         setUsername(username);
//     };

//     const onChangePassword = (e) => {
//         const password = e.target.value;
//         setPassword(password);
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();

//         setLoading(true);

//         form.current.validateAll();

//         if (checkBtn.current.context._errors.length === 0) {
//             dispatch(login(username, password))
//                 .then(() => {
//                     props.history.push("/profile");
//                     window.location.reload();
//                 })
//                 .catch(() => {
//                     setLoading(false);
//                 });
//         } else {
//             setLoading(false);
//         }
//     };

//     if (isLoggedIn) {
//         return <Redirect to="/profile" />;
//     }

//     return (
//         <div className="col-md-12">
//             <div className="card card-container">
//                 <img
//                     src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
//                     alt="profile-img"
//                     className="profile-img-card"
//                 />

//                 <Form onSubmit={handleLogin} ref={form}>
//                     <div className="form-group">
//                         <label htmlFor="username">Username</label>
//                         <Input
//                             type="text"
//                             className="form-control"
//                             name="username"
//                             value={username}
//                             onChange={onChangeUsername}
//                             validations={[required]}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <Input
//                             type="password"
//                             className="form-control"
//                             name="password"
//                             value={password}
//                             onChange={onChangePassword}
//                             validations={[required]}
//                         />
//                     </div>

//                     <div className="form-group">
//                         <button className="btn btn-primary btn-block" disabled={loading}>
//                             {loading && (
//                                 <span className="spinner-border spinner-border-sm"></span>
//                             )}
//                             <span>Login</span>
//                         </button>
//                     </div>

//                     {message && (
//                         <div className="form-group">
//                             <div className="alert alert-danger" role="alert">
//                                 {message}
//                             </div>
//                         </div>
//                     )}
//                     <CheckButton style={{ display: "none" }} ref={checkBtn} />
//                 </Form>
//             </div>
//         </div>
//     );
// };

// export default Login;
