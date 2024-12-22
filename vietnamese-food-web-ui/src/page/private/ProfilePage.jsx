import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MDBCol, MDBContainer, MDBRipple, MDBRow } from 'mdb-react-ui-kit'
import SideBar from '../../components/SideBar'
import { SidebarOption } from '../../config/Constant'
import { users } from "../../test/Datatest";
import ProfileInfoBox from '../../components/ProfileInfoBox'
export default function ProfilePage() {
    const [user, setUser] = React.useState(null);
    useEffect(() => {setUser(users[2]);}, []);
  return (
    <>
        <Header />
        <MDBContainer fluid>
            <MDBRow style={{ marginTop: '7%' }}>
                <MDBCol md="2">
                    <SideBar sideBarOption={SidebarOption.PROFILE} user={user} />
                </MDBCol>
                <MDBCol md="10">
                    <ProfileInfoBox user={user} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <Footer />
    </>
  )
}
