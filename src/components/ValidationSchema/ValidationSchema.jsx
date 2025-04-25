import * as Yup from "yup";

const phoneRegExp =
  /^(\+?\d{1,3}[-.\s]?|\()?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/;
const nameRegExp = /^[a-zA-Zа-яА-ЯёЁ\s'-]{3,50}$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      nameRegExp,
      "Name can contain only letters, spaces, hyphens, and apostrophes"
    )
    .min(3, "Name is too short")
    .max(50, "Name is too long")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Invalid phone number format")
    .required("Required"),
});
export default validationSchema;
