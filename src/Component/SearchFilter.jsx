import { useState } from "react"

const SearchFilter = () =>{
    const fruits = ["Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Strawberry",
    "Pineapple",
    "Mango",
    "Watermelon",
    "Peach",
    "Pear",
    "Cherry",
    "Plum",
    "Kiwi",
    "Lemon",
    "Coconut",
    "Avocado",
    "Blueberry",
    "Raspberry",
    "Cantaloupe",
    "Fig",
    "Pomegranate",
    "Papaya",
    "Lychee",
    "Guava",
    "Apricot"]
    const[searchText, setSearchText] = useState('')
    const [result, setresult] = useState(fruits)
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchText(query);

        const filteredItem = fruits.filter((fruits) => 
            fruits.toLowerCase().includes(query));
        setresult(filteredItem)
        
    }

    return(
        <div className="border-2 w-1/2 rounded-xl p-6 bg-black  m-5">
            <h1 className="text-[25px] text-white">Search Filter</h1>

            <input type="text"
            value={searchText}
            className="w-[500px] p-1 m-1 rounded bg-slate-400"
            onChange={handleSearch}
            
            />

            <ul className="w-full p-2 shadow mt-2">
                {
                   result && result.map((result,index)=>(
                        <li key={index} className="bg-yellow-300 text-[20px] rounded-lg text-black mb-1 px-2">{result}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchFilter