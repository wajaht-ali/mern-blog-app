/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";

const API_KEY = import.meta.env.VITE_REACT_APP_URI;
const Table = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`${API_KEY}/admin/getAllUsers`, { withCredentials: true })
            .then((res) => {
                // console.log(res);
                setUsers(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    const handleDelete = (id) => {
        axios.delete(`${API_KEY}/admin/deleteUser/` + id)
            .then((res) => {
                window.location.reload();
                // if(res.data === "Success") {
                //     // navigate(0);
                // }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const columns = [
        {
            name: 'Sr #',
            selector: 'id', // Assuming each item in your users array has an id field
            sortable: true,
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Role',
            selector: 'role',
            sortable: true,
        },
        {
            name: 'Edit',
            cell: (row) => <Link className="bg-green-500 text-white py-1 px-2 rounded" to={`/admin/update-user/${row._id}`}>Edit</Link>,
            // button: true,
        },
        {
            name: 'Delete',
            cell: (row) => <Link className="bg-red-500 text-white py-1 px-2 rounded" onClick={(e) => handleDelete(row._id)}>Delete</Link>,
            // button: true,
        }
    ];

    return (
        <DataTable
            columns={columns}
            data={users}
            striped
            highlightOnHover
            fixedHeader
            pagination
        />
    )
}

export default Table