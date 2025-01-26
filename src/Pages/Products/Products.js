import React from "react";
import "./Products.css";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export default function Products() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
      });
  }, []);

  function removeProduct(productID) {
    let newProducts = productsData.filter(product => {
      return product.id !== productID
    })

    setProductsData(newProducts)
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      editable: true,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`}>
            <div className="data-grid-name">
              <img src={params.row.img} alt="" className="data-grid-img" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
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
            <Link to={`/product/${params.row.id}`} className="data-grid-edit-btn-wrapper">
              <button className="data-grid-btn edit-btn">Edit</button>
            </Link>
            <button className="data-grid-btn remove-btn" onClick={() => removeProduct(params.row.id)}>Remove</button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Box sx={{ height: "88vh", width: "100%" }}>
        <DataGrid
          rows={productsData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
              },
            },
          }}
          pageSizeOptions={[3]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}