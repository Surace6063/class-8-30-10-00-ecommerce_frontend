import { Outlet } from "react-router-dom"
import AdminSideBar from "../components/AdminSideBar"

const AdminLayout = () => {
  return (
    <div className="flex gap-20">
        <div>
            <AdminSideBar />
        </div>

        <div className="mt-10 flex-1 mr-20">
            <Outlet />
        </div>
    </div>
  )
}
export default AdminLayout