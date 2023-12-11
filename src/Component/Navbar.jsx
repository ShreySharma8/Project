import { Link , NavLink} from "react-router-dom"

const Navbar = ({navData}) => {
    console.log(navData)
    
    return(
        <header>
            <nav className="flex justify-between items-center shadow-lg bg-white mb-5 gap-4 px-5">
                <NavLink to="/" className="font-extrabold text-lg text-orange-500">
                    ReactJs
                </NavLink>

                <div className="flex gap-5 items-center p-3">
                    <ul className="flex justify-between gap-5 text-black">
                        {
                           navData && navData.map((item, index) => {
                                return(
                                    <li key={index}>
                                       
                                        <NavLink
                                         to={item.URL}
                                         className={({isActive}) =>`text-xl ${isActive ? "text-orange-500" : "text-blue-500"} font-semibold`}>
                                            {item.label}
                                        </NavLink>
                                    </li>
                                )
                            })                  
                        }
                    </ul>

                    <button className="bg-blue-300 p-2 rounded">Greet</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar