import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import './Navigation.css'
function Navigation() {
    const location = useLocation();
    let routes = [
        {
            to: "/",
            title: "Home"
        },
        {
            to: "/about",
            title: "About"
        },
        {
            to: "/about/1",
            title: "About Details"
        },
        {
            to: "/posts",
            title: "Posts"
        }
    ]
    return (
        <>
            {
                routes.map((route, index)=>{
                    return (
                        <Fragment key={index}>
                            <Link className={location.pathname===route.to ? "active": ""} to={route.to}>{route.title}</Link>
                            <br/>
                        </Fragment>
                    )
                })
            }
        </>
    )
}
export default Navigation;
