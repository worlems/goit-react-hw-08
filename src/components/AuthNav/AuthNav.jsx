import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const getLinkClass = ({ isActive }) =>
  isActive ? `${s.link} ${s.active}` : s.link;

export default function AuthNav() {
  return (
    <div className={s.navWrapper}>
      <NavLink className={getLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
