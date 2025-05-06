import { TailSpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <TailSpin color="#c49b66" height={60} width={60} />
    </div>
  );
};

export default Loader;
