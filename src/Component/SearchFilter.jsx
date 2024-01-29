import { useState } from "react";

const SearchInput = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    className="w-full py-3 px-4 rounded-lg border-2 focus:outline-none focus:border-blue-300 bg-blue-100 text-blue-800"
    onChange={onChange}
    placeholder="Search for fruits..."
  />
);

const FruitList = ({ fruits }) => (
  <ul className="w-full p-6 shadow mt-6 space-y-3 bg-purple-200 rounded-lg">
    {fruits.map((fruit, index) => (
      <li key={index} className="bg-indigo-500 text-lg rounded-lg text-white p-3 hover:bg-indigo-700 cursor-pointer">
        {fruit}
      </li>
    ))}
  </ul>
);

const SearchFilter = () => {
  const fruits = ["Apple", "Banana", "Orange","Grapes","Strawberry","Pineapple","Mango","Watermelon","Peach","Pear","Cherry","Plum","Kiwi","Lemon","Coconut","Avocado","Blueberry","Raspberry","Cantaloupe","Fig","Pomegranate","Papaya","Lychee","Guava","Apricot"];
  const [searchText, setSearchText] = useState("");
  const [filteredFruits, setFilteredFruits] = useState(fruits);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchText(query);

    const filteredFruits = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(query)
    );
    setFilteredFruits(filteredFruits);
  };

  return (
    <div className="border-4 w-3/4 rounded-xl p-8 bg-gray-100 m-auto">
      <h1 className="text-4xl text-gray-800 mb-6">Search Filter</h1>
      <SearchInput value={searchText} onChange={handleSearch} />
      {filteredFruits.length > 0 ? (
        <FruitList fruits={filteredFruits} />
      ) : (
        <p className="text-gray-800 mt-6">No matching fruits found.</p>
      )}
    </div>
  );
};

export default SearchFilter;
