import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import s from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={s.container}>
      <PageTitle className={s.title}>Please log in</PageTitle>
      <div className={s.formContainer}>
        <LoginForm />
      </div>
    </div>
  );
}
