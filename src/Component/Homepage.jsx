import { Link } from "react-router-dom"

const Homepage = ({navData}) => {
    console.log("navData", navData)
    return(
       <div className=" px-5 md:px-16">
        <h1 className="text-3xl font-bold mt-20 mb-5 text-center">View My Projects</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black text-lg">
            {
              navData && navData.map((item, index) =>{
                    return(
                        <li key={index} className="border-4 rounded-lg border-black p-4 text-center bg-red-400">
                            <Link to={item.URL} className="text-xl text-yellow-200 font-semibold">
                                {item.label}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
       </div>
    )
}

export default Homepage;