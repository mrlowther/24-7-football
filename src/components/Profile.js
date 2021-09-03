<<<<<<< HEAD
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";

// import { isEmail } from "validator";

// const required = value => {
//     if (!value) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This field is required!
//         </div>
//       );
//     }
//   };
  
//   const email = value => {
//     if (!isEmail(value)) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This is not a valid email.
//         </div>
//       );
//     }
//   };

//   render() {
//     return (
//       <Form
//         onSubmit={handleLogin}
//         ref={form}
//       >
//         <Input
//           type="text"
//           className="form-control"
          
//           validations={[required, email]}
//         />
  
//         <CheckButton
//           style={{ display: "none" }}
//           ref={checkBtn}
//         />
//       </Form>
//     );
//   }

//   form.validateAll();

// if (checkBtn.context._errors.length === 0) {
//   // do something when no error
// }
=======
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator";

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  const email = value => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

  render() {
    return (
      <Form
        onSubmit={handleLogin}
        ref={form}
      >
        <Input
          type="text"
          className="form-control"
          
          validations={[required, email]}
        />
  
        <CheckButton
          style={{ display: "none" }}
          ref={checkBtn}
        />
      </Form>
    );
  }

  form.validateAll();

if (checkBtn.context._errors.length === 0) {
  // do something when no error
}
>>>>>>> 99723e2cf5d6120e6af6ae864f28d94dfe5c7c67
