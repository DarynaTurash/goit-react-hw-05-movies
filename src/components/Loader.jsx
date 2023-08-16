import { Container } from '../components/Loader.styled';
import { ColorRing } from  'react-loader-spinner';


const Loader = () => {
    return (
        <Container>
        <ColorRing
        visible={true}
        height="40"
        width="40"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
      </Container>
    );
};

export default Loader;