import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
function App() {
  const { currentUser } = useContext(AuthContext)
  const { darkMode } = useContext(DarkModeContext)
  
  const Layout = () =>{
    return(
      <div className={darkMode?"theme-dark":"theme-light"}>
        <NavBar />
        <div style={{display:'flex'}}>
          <LeftBar />
          <div style={{flex:6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>

      </div>
    )
  }

  const ProtectedRoute= ({children})=>{
    if(!currentUser){
      return <Navigate to={"/social-media/login"} />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:'/social-media/',
      element:(
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
        ),
      children: [
        {
          path:'/social-media/',
          element: <Home />
        },
        {
          path:'/social-media//profile/:id',
          element: <Profile />
        }
      ]
    },
    {
      path:'/social-media//login',
      element: <Login />
    },
    {
      path:'/social-media/register',
      element: <Register />
    }

  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
