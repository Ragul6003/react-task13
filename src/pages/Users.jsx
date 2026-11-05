import React from "react";
import { useSearchParams } from "react-router-dom";

import users from "../data/users";
import UserTable from "../components/UserTable";

function Users() {

    const [searchParams, setSearchParams] = useSearchParams();

    const recordsPerPage = 5;
    const totalPages = Math.ceil(users.length / recordsPerPage);

    const pageParam = Number(searchParams.get("page"));

    const currentPage =
        Number.isInteger(pageParam) && pageParam >= 1 && pageParam <= totalPages
            ? pageParam
            : 1;

    const startIndex = (currentPage - 1) * recordsPerPage;

    const currentUsers = users.slice(
        startIndex,
        startIndex + recordsPerPage
    );

    const changePage = (page) => {
        setSearchParams({ page: String(page) });
    };

    return (
        <div className="container">

            <div className="heading">
                <div>
                    <h1>User Management</h1>
                    <p>Manage and view all registered users.</p>
                </div>

                <div className="total-users">
                    Total Users: {users.length}
                </div>
            </div>

            <UserTable users={currentUsers} />

            <div className="pagination">

                <button
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <div className="page-info">
                    Page <strong>{currentPage}</strong> of {totalPages}
                </div>

                <button
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>

            </div>

            <p className="record-info">
                Showing {startIndex + 1} -{" "}
                {Math.min(startIndex + recordsPerPage, users.length)} of {users.length} users
            </p>

        </div>
    );
}

export default Users;