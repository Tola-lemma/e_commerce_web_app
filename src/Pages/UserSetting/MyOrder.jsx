import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CustomBreadcrumbs from "../ReUsableComponents/BreadCrumb";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);
  const breadcrumbsItems = [
      { name: "Account",href:"/account" },
      { name: "My-Order", },
  ];
  return (
    <Box sx={{ padding: "20px" }}>
      <CustomBreadcrumbs items={breadcrumbsItems} />
      <Typography variant="h4" gutterBottom>
        My Orders
      </Typography>
      {orders.length > 0 ? (
        orders.map((order) => (
          <Paper elevation={3} sx={{ marginBottom: "20px", padding: "20px" }} key={order.id}>
            <Typography variant="h6" gutterBottom>
              Order ID: {order.id}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Date: {order.date}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total: ${order.total}
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        width="50"
                        height="50"
                      />
                    </TableCell>
                    <TableCell>
                      {item.title}
                    </TableCell>
                    <TableCell>${item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        ))
      ) : (
        <Typography variant="h6"  sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5",
            textAlign: "center",
            padding: 0,
            margin: 0,
            width: "100%",
            fontFamily: "Poppins",
            fontSize: "48px",
            color:"red"
          }}>
          No previous orders found.
        </Typography>
      )}
    </Box>
  );
};

export default MyOrders;
