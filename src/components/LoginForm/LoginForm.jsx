import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";
import { useState } from "react";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, actions) => {
    setLoading(true);
    dispatch(logIn(values));
    actions.resetForm();
    setLoading(false);
  };

  return (
    <div className={s.container}>
      {loading && <Loader />}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={s.form} autoComplete="off">
          <label className={s.label}>
            Email
            <Field className={s.input} type="email" name="email" />
          </label>
          <label className={s.label}>
            Password
            <Field className={s.input} type="password" name="password" />
          </label>
          <button className={s.button} type="submit" disabled={loading}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
