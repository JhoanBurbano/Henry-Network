import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";


export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div className='main'>
                <SideBar />
                <div className='main-content'>
                    {children}
                </div>
            </div>
        </>
    )
}