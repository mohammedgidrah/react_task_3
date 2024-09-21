import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const UserForm = () => {
  const initialValues = {
    name: "",
    email: "",
  };

  
  const validate = (values) => {
    const errors = {};

    
    if (!values.name.trim()) {
      errors.name = "Name is required.";
    }

    
    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address.";
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    alert(`Form submitted with Name: ${values.name}, Email: ${values.email}`);
    setSubmitting(false);
  };

  return (
    <div>
      <h2>User Input Form</h2>
      <Formik
        initialValues={initialValues}
        validate={validate} 
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>
                Name:
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </label>
              <ErrorMessage name="name" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <label>
                Email:
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </label>
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
