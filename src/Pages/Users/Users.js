import React from "react";
import "./Users.css";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users/")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  function removeUser(userID) {
    let newUsers = users.filter(user => {
      return user.id !== userID
    })

    setUsers(newUsers)
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User Name",
      width: 250,
      editable: true,
      renderCell: (params) => {
        return (
          <Link to="">
            <div className="data-grid-user">
              <img src={params.row.img} alt="" className="data-grid-img" />
              {params.row.userName}
            </div>
          </Link>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transactions",
      width: 150,
      editable: true,
    },
    {
      field: "btn",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="data-grid-btn-wrapper">
            <Link to={`/user/${params.row.id}`} className="data-grid-edit-btn-wrapper">
              <button className="data-grid-btn edit-btn">Edit</button>
            </Link>
            <button className="data-grid-btn remove-btn" onClick={() => removeUser(params.row.id)}>Remove</button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Box sx={{ height: "88vh", width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 1,
              },
            },
          }}
          pageSizeOptions={[1]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}