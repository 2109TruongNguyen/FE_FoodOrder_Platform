import { useState, useEffect, useCallback } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSearchParams } from "react-router-dom";
import {
  getProvinces,
  getDistrictsByProvince,
  getWardsByDistrict,
} from "../../service/apiAddress";

import MyCardForm from "../../components/MyCartForm";
const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId") || "";
  const [cart, setCart] = useState([]);

  const updateCart = useCallback(() => {
    if (!userId) {
      console.error("UserId is missing!");
      return;
    }
    const storedCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    setCart(storedCart);
  }, [userId]);

  useEffect(() => {
    if (!userId) {
      console.error("UserId is not provided!");
      return;
    }

    updateCart();
  }, [userId, updateCart]);

  const currentUser = { address: "", province: "", district: "", ward: "" }; // Example structure for currentUser
  const [userInfo, setUserInfo] = useState(currentUser);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  // Fetch provinces when the component mounts
  useEffect(() => {
    const fetchProvinces = async () => {
      const data = await getProvinces();
      setProvinces(data);
    };
    fetchProvinces();
  }, []);

  // Handle changes in province selection
  const handleProvinceChange = async (provinceCode) => {
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      province: provinceCode,
      district: "", // Clear district and ward when province changes
      ward: "",
    }));
    const fetchedDistricts = await getDistrictsByProvince(provinceCode);
    setDistricts(fetchedDistricts);
  };

  // Handle changes in district selection
  const handleDistrictChange = async (districtCode) => {
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      district: districtCode,
      ward: "", // Clear ward when district changes
    }));
    const fetchedWards = await getWardsByDistrict(districtCode);
    setWards(fetchedWards);
  };

  // Handle changes in ward selection
  const handleWardChange = (wardCode) => {
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      ward: wardCode,
    }));
  };

  // Handle address formatting
  useEffect(() => {
    const provinceName =
      provinces.find((p) => p.code === userInfo.province)?.name || "";
    const districtName =
      districts.find((d) => d.code === userInfo.district)?.name || "";
    const wardName = wards.find((w) => w.code === userInfo.ward)?.name || "";
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      address: ` ${wardName}, ${districtName}, ${provinceName} `,
    }));
  }, [
    userInfo.province,
    userInfo.district,
    userInfo.ward,
    provinces,
    districts,
    wards,
  ]);

  // Handle input changes for other user info fields (e.g., name, phone, email)
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ backgroundColor: "#f3f4f6", padding: 4 }}>
        <Box
          sx={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Giỏ Hàng Của Bạn
            </Typography>
            {cart.length === 0 ? (
              <Typography align="center">Giỏ hàng trống!</Typography>
            ) : (
              cart.map((item) => (
                <MyCardForm
                  key={item.id}
                  item={item}
                  onUpdate={() => updateCart()}
                />
              ))
            )}
          </Box>
          <h2>Payment Information</h2>
          <form>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                placeholder="John Doe"
                value={userInfo.name || ""}
                onChange={handleChange}
                id="name"
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                placeholder="123-456-7890"
                value={userInfo.phone || ""}
                onChange={handleChange}
                id="phone"
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                placeholder="john.doe@example.com"
                value={userInfo.email || ""}
                onChange={handleChange}
                id="email"
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              {/* Read-only Address */}
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                value={userInfo.address}
                readOnly
              />
            </Box>

            {/* Province Dropdown */}
            <Box sx={{ marginBottom: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Chọn tỉnh</InputLabel>
                <Select
                  value={userInfo.province || ""}
                  onChange={(e) => handleProvinceChange(e.target.value)}
                  label="Chọn tỉnh"
                >
                  <MenuItem value="" disabled>
                    Chọn tỉnh
                  </MenuItem>
                  {provinces.map((province) => (
                    <MenuItem key={province.code} value={province.code}>
                      {province.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* District Dropdown */}
            <Box sx={{ marginBottom: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Chọn huyện</InputLabel>
                <Select
                  value={userInfo.district || ""}
                  onChange={(e) => handleDistrictChange(e.target.value)}
                  label="Chọn huyện"
                >
                  <MenuItem value="" disabled>
                    Chọn huyện
                  </MenuItem>
                  {districts.map((district) => (
                    <MenuItem key={district.code} value={district.code}>
                      {district.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* Ward Dropdown */}
            <Box sx={{ marginBottom: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Chọn xã</InputLabel>
                <Select
                  value={userInfo.ward || ""}
                  onChange={(e) => handleWardChange(e.target.value)}
                  label="Chọn xã"
                >
                  <MenuItem value="" disabled>
                    Chọn xã
                  </MenuItem>
                  {wards.map((ward) => (
                    <MenuItem key={ward.code} value={ward.code}>
                      {ward.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#1D4ED8",
                color: "white",
                padding: "12px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#2563EB",
                },
                marginTop: 3,
              }}
            >
              Submit Payment
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PaymentPage;
