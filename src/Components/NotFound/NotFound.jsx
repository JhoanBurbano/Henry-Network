import Layout from "../Layout/Layout";
import { StyledNotFound } from "./styles";
import notFound from '../../images/notFound.png'

export default function NotFound() {
    return (
        <Layout>
            <StyledNotFound>
                {/* <p className='not__found__p'>No existe ninguna ruta con este nombre</p> */}
                <img src={notFound} alt="img not found" />
            </StyledNotFound>
        </Layout>
    )
}