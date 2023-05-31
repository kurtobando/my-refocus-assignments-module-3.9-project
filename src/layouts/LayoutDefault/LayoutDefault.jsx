import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

function Default() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Default;
