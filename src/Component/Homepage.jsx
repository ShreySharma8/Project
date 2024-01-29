import { Link } from "react-router-dom";

const Homepage = ({ navData }) => {
  console.log("navData", navData);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">View My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {navData &&
          navData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md overflow-hidden transform transition-transform hover:scale-105"
              style={{ background: "linear-gradient(to bottom right, #FFD700, #FF6347)" }}
            >
              <Link
                to={item.URL}
                className="block p-6 text-xl font-semibold text-white hover:text-white transition duration-300"
              >
                {item.label}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Homepage;

