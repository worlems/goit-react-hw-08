import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import s from "../ContactForm/ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number().required("Required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field className={s.input} name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>
        <label className={s.label}>
          Number
          <Field className={s.input} name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
