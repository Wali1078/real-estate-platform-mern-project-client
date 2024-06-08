import { BiSun } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import useTheme from "../../hooks/useTheme";

export default function DarkMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="ml-4 mt-2">
      <div>
        <span
          onClick={toggleTheme}
          className={`btn btn-circle rounded-full btn-outline hover:bg-white hover:text-black dark:border-white dark:text-black dark:hover:bg-black dark:hover:text-white`}
        >
          <span className="hover:-rotate-90">
            {theme === "dark" ? <BiSun size={40} /> : <MdDarkMode size={40} />}
          </span>
        </span>
      </div>
    </div>
  );
}
