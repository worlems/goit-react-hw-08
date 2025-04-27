import { FaPhone, FaUser } from "react-icons/fa6";
import { useEffect } from "react";
import s from "../Contact/Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/operations.js";
import { selectContacts } from "../../redux/contacts/selectors.js";

export const Contact = ({ items: { name, number, id } }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchContacts());
    }
  }, [dispatch, contacts.length]);

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={s.contact}>
      <div className={s.info}>
        <span className={s.name}>
          <FaUser className={s.icon} /> {name}
        </span>
        <span className={s.number}>
          <FaPhone className={s.icon} />
          {number}
        </span>
      </div>
      <button className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
