import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import * as React from "react";

export interface Item {
  id: String;
  name: String;
  image: String;
  discountPercent: Number;
  availableQuanlity: Number;
  price: Number;
}

const mockData = [
  {
    id: 1,
    name: 'Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD)',
    image:
      "https://lh3.googleusercontent.com/OPNIaDml5ZTh9653Gqtxc8BaWFqHZmSjaMs0ou321y3YWNR_68HybgMlVsflBN147gok7WxnsmrB7rKq9Z4a1mhnaS2lSYUPMA=rw-w300",
    price: 25800000,
    discountPercent: 10,
    seller: "Xiaomi",
    relatedProducts: [
      {
        id: 2,
        name: 'Laptop Lenovo (14" 4GB/128GB SSD/Intel UHD)',
        image:
          "https://lh3.googleusercontent.com/TvxcE7fes0NtPyjDUqmvVlbdgj63tujZtJCroBtrrMXu1j-MC1Rns56ia6z2USjinoa5gp_GfbthX5BRThBHEdBXFbWXBQ4K=rw-w300",

        availableQuantity: 3,
        price: 12000000,
        discountPercent: 5,
      },
      {
        id: 3,
        name: "Apple Macbook Pro 16 inch Retina display",
        image:
          "https://lh3.googleusercontent.com/TsvY9ecw4JYAwF0Ez-M5h_xc1qtX2bwLS21Zc_CbKy_qgIB0OEkbSnEREiXqxZEgnaPCyhLvSh04q7Z1GQlRFeyh5sprWto=rw-w300",
        discountPercent: "",
        availableQuantity: 4,
        price: 15190000,
      },
      {
        id: 4,
        name: 'Laptop Dell (16" 8GB/256GB SSD/Intel UHD)',
        image:
          "https://lh3.googleusercontent.com/awNX33cUhBXFLT7Wv9aNBfKo9wiwiwLgPi2JfNgZKHGWTmYZ1N5AMQNE4HZT2AuZMZ1zX2Exk7UwQ0d-irm_sjcUwClzZTlW=rw-w300",
        discountPercent: "",
        availableQuantity: 3,
        price: 19000000,
      },
    ],
  },
];

function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="sm" sx={{ justifyContent: "center" }}>
        {mockData.map((item) => (
          <Card key={item.id} style={{ marginBottom: 16 }} elevation={0}>
            <CardMedia
              component="img"
              width={"100%"}
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography
                variant="h6"
                style={{ color: "red", fontWeight: "bold" }}
                gutterBottom
              >
                {(
                  (item.price * (100 - item.discountPercent)) /
                  100
                ).toLocaleString()}
                VND
              </Typography>
              <Box style={{ display: "flex" }}>
                <Typography
                  variant="caption"
                  sx={{ textDecoration: "line-through", opacity: 0.25 }}
                >
                  {item.price.toLocaleString()} VND
                </Typography>
                {item.discountPercent && (
                  <Typography
                    variant="caption"
                    style={{ color: "red", marginLeft: 4 }}
                  >
                    -{item.discountPercent}%
                  </Typography>
                )}
              </Box>
              <Typography
                variant="body1"
                style={{ fontWeight: "bold" }}
                gutterBottom
              >
                {item.name}
              </Typography>
              <Box style={{ display: "flex" }}>
                <Typography variant="caption" style={{ color: "gray" }}>
                  By
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "#36a5ff",
                    marginLeft: 4,
                    textTransform: "uppercase",
                  }}
                >
                  {item.seller}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                style={{ fontWeight: "bold", marginTop: 16, marginBottom: 8 }}
                gutterBottom
              >
                Sản phẩm liên quan
              </Typography>
              <div style={{ display: "flex", overflowX: "auto" }}>
                {item.relatedProducts.map((relatedProduct) => (
                  <Card
                    key={relatedProduct.id}
                    sx={{
                      minWidth: 200,
                      marginRight: 2,
                      border: 1,
                      borderColor: "#edecf3",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={relatedProduct.image}
                      title={relatedProduct.name}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {relatedProduct.name}
                      </Typography>
                      <Typography variant="body2" color="#edae61">
                        Còn {relatedProduct.availableQuantity} sản phẩm
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "red", fontWeight: "bold" }}
                      >
                        {(
                          (relatedProduct.price *
                            (100 - Number(relatedProduct.discountPercent))) /
                          100
                        ).toLocaleString()}
                        VND
                      </Typography>
                      {/* Assuming you have a discountPercent property for related products */}
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          variant="caption"
                          sx={{ textDecoration: "line-through", opacity: 0.25 }}
                        >
                          {relatedProduct.price.toLocaleString()}
                        </Typography>
                        {relatedProduct.discountPercent && (
                          <Typography
                            variant="caption"
                            sx={{ color: "red", marginLeft: 1 }}
                          >
                            -{relatedProduct.discountPercent}%
                          </Typography>
                        )}
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        justifyContent: "center",
                        justifyItems: "center",
                        marginTop: -2,
                      }}
                    >
                      <Button
                        size="medium"
                        sx={{
                          color: "red",
                          border: 1,

                          justifyContent: "center",
                          justifyItems: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Thêm vào giỏ
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default App;
