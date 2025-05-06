import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCompass } from "react-icons/fa";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === "") {
      toast.error("Enter a word to search 🧭");
      return;
    }

    onSubmit(value.trim());
    setValue("");
  };

  useEffect(() => {
    const wave = document.querySelector(`.${css.wavePath}`);
    let frame = 0;

    const animate = () => {
      frame += 1;
      const offset = Math.sin(frame * 0.3) * 10;
      wave.setAttribute(
        "d",
        `M0,${30 + offset} C360,${60 + offset} 1080,${0 - offset} 1440,${30 + offset} L1440,80 L0,80 Z`
      );
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <header className={css.header}>
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className={css.title}>
        <FaCompass style={{ marginRight: 8 }} />
        Image Hunt 🏴‍☠️
      </h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>Search</button>
      </form>
      <div className={css.waves}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path className={css.wavePath}></path>
        </svg>
      </div>
    </header>
  );
};

export default SearchBar;
