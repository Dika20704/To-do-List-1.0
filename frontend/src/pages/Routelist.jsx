import React from "react";
import List from "../common/List";
function Routelist({ todos,setTodos}) {
  const handleDelete = (index) => {
    setTodos((currentTodos) =>
      currentTodos.filter((_, i) => i !== index)
    );
  }
  return (
    <>
      <main className="mt-18 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 items-center gap-x-15 gap-y-10">
        <List todos={todos} handleDelete={handleDelete} />
      </main>
    </>
  );
}

export default Routelist;
