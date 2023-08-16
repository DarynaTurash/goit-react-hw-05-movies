import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./Loader";
import { Header, Navigation, Link} from "./SharedLayout.styled";
import { Container } from "../commonStyles/ContainerAndSection";

const SharedLayout = () => {
    return (
        <>
            <Header>
                <Container>
                <Navigation>
                    <Link to='/'>Home</Link>
                    <Link to="/movies">Movies</Link>
                </Navigation>
                </Container>
            </Header>
            <Suspense fallback={<Loader />}>
            <Outlet />
            </Suspense>
        </>
    );
};

export default SharedLayout;