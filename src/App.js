import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AboutDetails from "./AboutDetails";
import Navigation from "./Navigation";
// import Posts from "./PostsClass";
import Posts from "./Posts";
import PostDetails from "./PostDetails";
function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" exact={true} element={<About/>}/>
                <Route path="/about/:id" exact={true} element={<AboutDetails/>}/>
                <Route path="/posts" exact={true} element={<Posts/>}/>
                {/* <Route path="/post/:id" exact={true} element={<PostDetails/>}/> */}
                <Route path="/post" exact={true} element={<PostDetails/>}/>
            </Routes>
            <h2>Footer</h2>
        </>
        
    )
}
export default App;
