import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Card } from "./styledCardProfile"

export const CardFollow = ({ fullname, profile, email, id }) => {
    const myId = useSelector((state) => state.myId)

    return (
        <>
            <Card key={id}>
                <p className='name' key={id}>
                    <img className='user-img' src={profile.includes('http')?profile:process.env.REACT_APP_PUERTO+profile} alt={fullname} />
                    <Link to={`/${myId.id === id ? 'myprofile' : `profile/${id}`}`} >
                        {fullname}
                        <span className='email'>{email}</span>
                        <span className='span-link' />
                    </Link>
                </p>
            </Card>
        </>
    )
}


