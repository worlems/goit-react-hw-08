import s from "../SearchBox/SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { useId } from "react";

export const SearchBox = () => {
  const filterID = useId();

  const dicpatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = (e) => {
    dicpatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label className={s.wrapper}>
        Find contacts by name
        <input
          id={filterID}
          type="text"
          value={filter}
          onChange={handleSearch}
          className={s.input}
        />
      </label>
    </div>
  );
};
