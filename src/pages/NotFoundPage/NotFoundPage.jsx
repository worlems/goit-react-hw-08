import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={s.container}>
      <p className={s.message}>
        Page not found! Please go to{" "}
        <Link to="/" className={s.link}>
          Home page
        </Link>
        !
      </p>
    </div>
  );
}
