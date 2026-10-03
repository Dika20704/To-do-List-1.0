import { useState } from "react";
import List from "../common/List";

export default function HomePage({todos,setTodos}) {
  const [todo, setTodo] = useState("");
  
  

  const handlesave = () => {
    if (todo.trim("") === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };
  const handleDetele = (index) => {
    setTodos((setdelete) => setdelete.filter((_, i) => i !== index));
  };

  return (
    <>
      <main className="py-15 m-auto w-[90%] h-screen bg-gray-200">
        {" "}
        <div className="mt-24 flex items-center flex-col">
          <div className=" flex justify-center items-center ">
            <input
              value={todo}
              placeholder="tambahkan item..."
              type="text"
              onChange={(e) => setTodo(e.target.value)}
              className="border-3 w-72 h-12 border-blue-300 rounded-lg lg:w-120 lg:h-16 lg:text-2xl"
            />
            <button
              onClick={handlesave}
              type="submit"
              className="bg-blue-400 rounded-lg h-12 w-12 text-sm px-7 text-center flex justify-center items-center lg:w-16  lg:h-16 lg:text-2xl"
            >
              add
            </button>
          </div>
          <div className="mt-10 ">
            {" "}
            <List todos={todos} handleDelete={handleDetele} />
          </div>
        </div>
        <div className="">
          <div></div>
        </div>
      </main>
    </>
  );
}
