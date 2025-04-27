import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";
import { Loader } from "../Loader/Loader";
import { useState } from "react";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, actions) => {
    setLoading(true);
    dispatch(register(values));
    actions.resetForm();
    setLoading(false);
  };

  return (
    <div className={s.container}>
      {loading && <Loader />}
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={s.form} autoComplete="off">
          <label className={s.label}>
            Username
            <Field className={s.input} type="text" name="name" />
          </label>
          <label className={s.label}>
            Email
            <Field className={s.input} type="email" name="email" />
          </label>
          <label className={s.label}>
            Password
            <Field className={s.input} type="password" name="password" />
          </label>
          <button className={s.button} type="submit" disabled={loading}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
