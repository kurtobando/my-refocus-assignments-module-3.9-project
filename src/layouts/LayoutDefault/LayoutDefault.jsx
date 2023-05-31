import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

function Default() {
    return (
        <div>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Default;
