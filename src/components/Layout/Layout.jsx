import { AppBar } from "../../components/AppBar/AppBar";
import s from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={s.container}>
      <AppBar />
      {children}
    </div>
  );
}
