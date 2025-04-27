import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/slice";
import { Contact } from "../Contact/Contact";
import s from "../ContactList/ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={s.contact_list}>
      {contacts.map((item) => (
        <Contact items={item} key={item.id} />
      ))}
    </ul>
  );
};
