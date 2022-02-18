import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearMyFollowsState, getFollowers, getFollows, getMyProfileData } from "../../actions"
import Layout from "../Layout/Layout"
import MyProfile from "./MyProfile"
import LoaderFull from "../Loader/LoaderFull"

export const ViewProfile = () => {
    const myProfile = useSelector((state) => state.myProfileData)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMyProfileData())
        dispatch(getFollows())
        dispatch(getFollowers())
        return () => {
            dispatch(clearMyFollowsState())
        }
    }, [dispatch])


    return (
        <Layout>
            {
                myProfile.data ? <MyProfile
                    myProfile={myProfile}
                />
                    :
                    <LoaderFull></LoaderFull>
            }
        </Layout>
    )
}