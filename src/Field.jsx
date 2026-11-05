import { useContext } from "react";
import { MyContext } from "./Context";

function Field({ label, name, type = "text" }) {
    const { data, setData } = useContext(MyContext);

    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                value={data[name]}
                onChange={(e) =>
                    setData({ ...data, [name]: e.target.value })
                }
                required
            />
        </div>
    );
}

export default Field;