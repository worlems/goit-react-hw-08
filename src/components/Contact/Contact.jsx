import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={styles.contact}>
      <div className={styles.info}>
        <span className={styles.name}>
          <FaUserAlt className={styles.icon} /> {contact.name}
        </span>
        <span className={styles.number}>
          <FaPhone className={styles.icon} />
          {contact.number}
        </span>
      </div>
      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
