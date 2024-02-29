import { Navbar } from "../Navbar/Navbar"
import { Footer } from "../Footer/Footer"
import { Banner } from "../Banner/Banner"
import { Products } from "../Products/Products";
export const Home = () => {
    return (
    <>       
        <Navbar/>
        <Banner/>
        <Footer/>
        <div className="product-card-container">
            <Products/>
        </div>
    </>
    );
};