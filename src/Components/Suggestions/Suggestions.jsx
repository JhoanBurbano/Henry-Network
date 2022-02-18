import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { clearUsersState, getUsers } from "../../actions";
import CardSuggestions from "./CardSuggestions";
import { DivCards } from "./StyledSuggestions";
import Layout from '../Layout/Layout'
import LoaderFull from "../Loader/LoaderFull";


const Suggestions = () => {
    const dispatch = useDispatch();
    const users = useSelector((state => state.users))

    useEffect(() => {
        dispatch(getUsers())
        return () => {
            dispatch(clearUsersState())
        }
    }, [dispatch])

    return (
        <Layout >
            <h1 className='layout__title'>Sugerencias</h1>
            <DivCards>
                {users.length? users.map(e => e.id? <CardSuggestions
                        fullname={e.fullname}
                        id={e.id}
                        profile={e.profile}
                        email={e.email}
                        follow={e.follow}
                        key={e.id}
                    />:<p>No hay sugerencias</p>
                ): <LoaderFull></LoaderFull> }
                <div className="espacios"></div>
            </DivCards>
        </Layout>
    )
}

export default Suggestions;
