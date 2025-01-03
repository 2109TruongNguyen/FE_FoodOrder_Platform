import { useState, useEffect } from "react";
import { SidebarOption } from "../../config/Constant";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import SideBar from "../../components/SideBar";
import { users } from "../../test/Datatest";
import Cart from "../../components/Cart";

const CartPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(users[2]);
  }, []);

  return (
    <>
      <Header />
      <MDBContainer fluid>
        <MDBRow style={{ marginTop: "7%" }}>
          <MDBCol md="2">
            <SideBar sideBarOption={SidebarOption.ORDER} user={user} />
          </MDBCol>
          <MDBCol md="10">
            {user ? <Cart userId={user.id} /> : <p>Loading...</p>}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default CartPage;
