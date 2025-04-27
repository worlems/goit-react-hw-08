import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";

export default function RegisterPage() {
  return (
    <div className={s.container}>
      <PageTitle className={s.title}>Register your account</PageTitle>
      <div className={s.formContainer}>
        <RegistrationForm />
      </div>
    </div>
  );
}
