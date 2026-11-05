
import { NavLink, Outlet } from "react-router-dom";

function Services() {
    return (
        <div className="page">
            <h1>Our Services</h1>
            <p>Choose one of our development services.</p>

            <div className="service-links">
                <NavLink to="/services/web">Web Development</NavLink>
                <NavLink to="/services/app">App Development</NavLink>
                <NavLink to="/services/uiux">UI/UX Design</NavLink>
            </div>

            <div className="service-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Services;
