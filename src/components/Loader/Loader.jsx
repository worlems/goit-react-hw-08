import { BeatLoader } from "react-spinners";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.backdrop}>
      <BeatLoader color="#3498db" size={15} margin={5} />
    </div>
  );
};
