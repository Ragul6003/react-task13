import { useContext } from "react";
import { MyContext } from "./Context";
import Field from "./Field";
import Button from "./Button";

function Form() {
    const { setSubmitted } = useContext(MyContext);

    return (
        <div className="container">
            <Button />

            <h1>Employee Registration</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                }}
            >
                <Field label="First Name" name="firstName" />
                <Field label="Last Name" name="lastName" />
                <Field label="Email" name="email" type="email" />
                <Field label="Mobile Number" name="mobile" />
                <Field label="Age" name="age" type="number" />
                <Field label="Gender" name="gender" />
                <Field label="City" name="city" />
                <Field label="Address" name="address" />
                <Field label="Department" name="department" />
                <Field label="Designation" name="designation" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;