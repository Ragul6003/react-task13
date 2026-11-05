import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        setUser(null);
        setError("");

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }
                return response.json();
            })
            .then((data) => {
                if (!data.id) {
                    setError("User Not Found");
                } else {
                    setUser(data);
                }
                setLoading(false);
            })
            .catch(() => {
                setError("Something went wrong. Please try again.");
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <h2 className="message">Loading user details...</h2>;
    }

    if (error || !user) {
        return (
            <div className="message">
                <h2>User Not Found</h2>
                <Link to="/users" className="back-btn">
                    Back to Users
                </Link>
            </div>
        );
    }

    return (
        <div className="details-container">
            <div className="details-card">
                <h1>User Details</h1>

                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>City:</strong> {user.address.city}</p>
                <p><strong>Street:</strong> {user.address.street}</p>
                <p><strong>Company:</strong> {user.company.name}</p>

                <Link to="/users" className="back-btn">
                    ← Back to Users
                </Link>
            </div>
        </div>
    );
}

export default UserDetails;