import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import validationSchema from "../ValidationSchema/ValidationSchema";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (formData, { resetForm }) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: formData.name,
        number: formData.number,
      })
    );
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.input} name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Number
          <Field className={styles.input} name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </label>
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
