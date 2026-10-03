// import { ActualBudget } from "@thesvg/react";

// function List({ todos, handleDelete }) {

//   return todos.map((todos, index) => (
//     <>
//       <div>
//         <div key={index} className="flex gap-x-2.5 ">
//           <div className="text-lg  border-b border-black w-66 lg:text-2xl lg:w-114">
//             {index + 1}.{todos}
//           </div>
//           <button
//             type="button"
//             onClick={() => handleDelete(index)}
//             className="py-2 px-4 bg-red-400 rounded-full"
//           >
//             x
//           </button>
//         </div>
//       </div>
//     </>
//   ));
// }

// export default List;

import { useState } from "react";

function List({ todos, handleDelete }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (index) => {
    setCheckedItems((current) => ({
      ...current,
      [index]: !current[index],
    }));
  };

  return todos.map((todo, index) => (
    <>
      <div className="">
        {" "}
        <div className="font-semibold flex justify-between">
          {" "}
          <div
            key={index}
            className="flex items-center  gap-2.5 text-lg  border-b border-black w-66 lg:text-2xl lg:w-114"
          >
            <input
              type="checkbox"
              checked={Boolean(checkedItems[index])}
              onChange={() => handleCheck(index)}
            />

            <span
              className={
                checkedItems[index] ? "line-through text-gray-500" : ""
              }
            >
              {todo}
            </span>
          </div>
          <button
            className="py-2 px-4 bg-red-400 rounded-full"
            type="button"
            onClick={() => handleDelete(index)}
          >
            x
          </button>
        </div>
      </div>
    </>
  ));
}

export default List;
