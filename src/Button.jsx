import { useContext } from "react";
import { MyContext } from "./Context";

function Button() {
    const { theme, setTheme } = useContext(MyContext);

    return (
        <button
            type="button"
            onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
            }
        >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
}

export default Button;