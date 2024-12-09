import React, { useContext, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  RadioGroup,
  FormControlLabel,
  Radio,
  Modal,
  Fade,
} from "@mui/material";
import CustomBreadcrumbs from "../ReUsableComponents/BreadCrumb";
import { useLocation } from "react-router-dom";
import { ErrorContext } from "../ToastErrorPage/ErrorContext";

const CheckoutPage = () => {
      const location = useLocation();
  const { cart, subtotal, shipping, total } = location.state || {};
  const {showSuccess, showError} = useContext(ErrorContext)
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    town: "",
    city: "",
    phoneNumber: "",
    email: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handlePaymentModalOpen = () => {
      const requiredFields = [
            billingDetails.firstName,
            billingDetails.companyName,
            billingDetails.streetAddress,
            billingDetails.town,
            billingDetails.city,
            billingDetails.phoneNumber,
            billingDetails.email,
          ];
        
          const isAnyFieldEmpty = requiredFields.some(field => !field);
        
          if (isAnyFieldEmpty) {
            showError("Please fill in all required fields.");
            return; 
          }
        
    setModalOpen(true);
  };

  const handlePaymentModalClose = () => {
    setModalOpen(false);
  };

  const handlePlaceOrder = () => {
      
    showSuccess('Payment is placed Successfully');
    // Close modal after submission
    setModalOpen(false);
  };
  const breadcrumbsItems = [
      { name: "Product" },
      { name: "cart",href:"/cart" },
      { name: "CheckOut" }
  ];
  return (
    <Box sx={{ padding: "20px" }}>
      <CustomBreadcrumbs items={breadcrumbsItems} />
      {cart && cart.length > 0 ? (
        <Grid container spacing={3} mt={4}>
          {/* Left Side: Billing Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Billing Details</Typography>
            <form>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                value={billingDetails.firstName}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    firstName: e.target.value,
                  })
                }
                sx={{ marginBottom: "15px" }}
                required
              />
              <TextField
                label="Company Name"
                variant="outlined"
                fullWidth
                value={billingDetails.companyName}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    companyName: e.target.value,
                  })
                }
                sx={{ marginBottom: "15px" }}
                required
              />
              <TextField
                label="Street Address"
                variant="outlined"
                fullWidth
                value={billingDetails.streetAddress}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    streetAddress: e.target.value,
                  })
                }
                sx={{ marginBottom: "15px" }}
                required
              />
              <TextField
                label="Apartment (Optional)"
                variant="outlined"
                fullWidth
                value={billingDetails.apartment}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    apartment: e.target.value,
                  })
                }
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                label="Town"
                variant="outlined"
                fullWidth
                value={billingDetails.town}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, town: e.target.value })
                }
                sx={{ marginBottom: "15px" }}
                required
              />
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                value={billingDetails.city}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, city: e.target.value })
                }
                sx={{ marginBottom: "15px" }}
                required
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                value={billingDetails.phoneNumber}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    phoneNumber: e.target.value,
                  })
                }
                sx={{ marginBottom: "15px" }}
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={billingDetails.email}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    email: e.target.value,
                  })
                }
                sx={{ marginBottom: "15px" }}
                required
              />
            </form>
          </Grid>

          {/* Right Side: Product Details */}

          <Grid item xs={12} md={6}>
            <Typography variant="h6">Product Details</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart?.map((item) => (
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
                      {item?.title <= 20
                        ? item?.title
                        : `${item?.title.substring(0, 20)}... `}
                    </TableCell>
                    <TableCell>${item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Box sx={{ marginTop: "20px" }}>
              <Table sx={{ tableLayout: "auto", width: "85%" }}>
                <TableBody>
                  <TableRow>
                    <TableCell>Subtotal</TableCell>
                    <TableCell align="right">
                      <Typography>${subtotal}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Shipping</TableCell>
                    <TableCell align="right">
                      <Typography>${shipping}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total </TableCell>
                    <TableCell align="right">
                      <Typography>
                        <span style={{ textDecoration: "underline" }}>
                          ${total}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>

            {/* Payment Method */}
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              sx={{ marginTop: "15px" }}
            >
              <FormControlLabel
                value="bank"
                control={<Radio />}
                label="Bank Transfer"
              />
              <FormControlLabel
                value="cash"
                control={<Radio />}
                label="Cash on Delivery"
              />
            </RadioGroup>

            {/* Coupon Code */}
            <TextField
              label="Coupon Code"
              variant="outlined"
              fullWidth
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              sx={{ marginBottom: "15px", width: "50%" }}
            />
            <Button
              variant="contained"
              sx={{
                marginTop: "6px",
                marginLeft: 3,
                backgroundColor: "#DB4444",
              }}
            >
              Apply Coupon
            </Button>
            <p></p>
            {/* Place Order Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#DB4444",
                color: "white",
                textTransform: "none",
                marginTop: "20px",
                marginLeft: 20,
              }}
              onClick={handlePaymentModalOpen}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Typography
          sx={{ 
            color: "red",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5',
            textAlign: 'center',
            padding: 0,
            margin: 0,
            width:"100%",
            fontFamily:"Poppins",
            fontSize:"32px"
           }}
        >
          No products are in the checkout page. Please add products to your cart
          and come back.
        </Typography>
      )}
      <Modal
        open={modalOpen}
        onClose={handlePaymentModalClose}
        closeAfterTransition
      >
        <Fade in={modalOpen}>
          <Box
            sx={{
              padding: "30px",
              backgroundColor: "white",
              borderRadius: "8px",
              maxWidth: "600px",
              margin: "auto",
              marginTop: "10px",
              justifyContent: "space-between",
              height: "auto",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Payment Summary
            </Typography>

            {/* Payment Summary Table */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Details</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Information</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Billing Details */}
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell align="right">
                    {billingDetails.firstName}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Company Name</TableCell>
                  <TableCell align="right">
                    {billingDetails.companyName}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Street Address</TableCell>
                  <TableCell align="right">
                    {billingDetails.streetAddress}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Apartment</TableCell>
                  <TableCell align="right">
                    {billingDetails.apartment || "N/A"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Town</TableCell>
                  <TableCell align="right">{billingDetails.town}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>City</TableCell>
                  <TableCell align="right">{billingDetails.city}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Phone Number</TableCell>
                  <TableCell align="right">
                    {billingDetails.phoneNumber}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell align="right">{billingDetails.email}</TableCell>
                </TableRow>

                {/* Payment Method */}
                <TableRow>
                  <TableCell>Payment Method</TableCell>
                  <TableCell align="right">
                    {paymentMethod === "bank"
                      ? "Bank Transfer"
                      : "Cash on Delivery"}
                  </TableCell>
                </TableRow>

                {/* Coupon Code */}
                <TableRow>
                  <TableCell>Coupon Code</TableCell>
                  <TableCell align="right">{couponCode || "N/A"}</TableCell>
                </TableRow>

                {/* Total */}
                <TableRow>
                  <TableCell>
                    <strong>Total</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>${total}</strong>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            {/* Confirm Order Button */}
            <Button
              variant="contained"
              sx={{
                marginTop: "15px",
                backgroundColor: "#DB4444",
                color: "white",
              }}
              onClick={handlePlaceOrder}
              fullWidth
            >
              Confirm Order
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default CheckoutPage;
