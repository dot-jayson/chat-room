import { UserAuth } from "../context/AuthContext"

const Navbar = () => {

    const { currentUser, logout } = UserAuth()

    const handleLogout = async () => {
        try {
            await logout()
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className=" navbar fixed bg-neutral text-neutral-content z-10">
            <div className="container mx-auto max-w-4xl flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">Chatroom</a>
                {currentUser ? <button
                    onClick={handleLogout}
                    className="btn">
                    Logout
                </button> : ""}
            </div>
        </div>

    )
}

export default Navbar