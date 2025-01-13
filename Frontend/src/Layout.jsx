
import Header from "./comonent/Header";
import Footer from "./comonent/Footer";
import { Outlet } from "react-router-dom";
import TopMenu from "./comonent/TopMenu";


const Layout=()=>{
    return(
        <>
           <Header/>
           <TopMenu/>
           <Outlet/>
           <Footer/>
        </>
    )
}
export default Layout;