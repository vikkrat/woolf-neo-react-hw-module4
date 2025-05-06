import { FadeLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <FadeLoader color="#c49b66" />
    </div>
  );
};

export default Loader;
