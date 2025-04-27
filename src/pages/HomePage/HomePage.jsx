import PageTitle from "../../components/PageTitle/PageTitle";
import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={s.container}>
      <PageTitle className={s.title}>
        Contacts manager welcome page <span>💁‍♀️</span>
      </PageTitle>
      <p className={s.subtitle}>Manage your contacts easily and effectively</p>
    </div>
  );
}
//
