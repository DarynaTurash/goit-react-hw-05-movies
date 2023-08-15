import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./Loader";

const SharedLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </nav>
            </header>
            <Suspense fallback={<Loader />}>
            <Outlet />
            </Suspense>
        </div>
    );
};

export default SharedLayout;