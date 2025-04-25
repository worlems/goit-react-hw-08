import { useSelector } from "react-redux";
import Contact from "../components/Contact/Contact";
import styles from "./ContactList.module.css";

import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <>
      {loading && <p>Loading contacts...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && contacts.length === 0 && <p>No contacts found.</p>}
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
}
