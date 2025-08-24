import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const ProtectedRoute = () => {
    const {isAuthenticated} = useSelector(state => state.auth)

    const location = useLocation()

    console.log(location);

    if(!isAuthenticated) return <Navigate to="/login" replace state={{from: location.pathname}} />
  return (
    <Outlet />
  )
}
export default ProtectedRoute