import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const showFilteredContacts = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <label className={styles.wrapper}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={showFilteredContacts}
          className={styles.input}
        />
      </label>
    </div>
  );
}
