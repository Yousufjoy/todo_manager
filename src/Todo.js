import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleUserData = () => {
    if (userInput.trim() !== "") {
      if (items.length < 4) {
        setItems([...items, userInput]);
        setUserInput("");
      } else {
        window.alert("You cannot put more than 4 Todos in the list!");
      }
    }
  };

  const handleDelete = (index) => {
    const updated = items.filter((_, id) => id !== index);
    setItems(updated);
  };

  const RemoveAll = () => {
    setItems([]);
  };

  return (
    <div>
      <div className="Card h-screen w-screen sm:h-[506px]  md:h-[506px] md:mt-[225px] md:ml-[700px] md:w-[606px] bg-[#FFFFFF]  shadow-lg shadow-gray">
        <div className="Title h-[60px] bg-[#AE81E7] font-semibold text-slate-100 flex justify-center items-center text-lg">
          TODO MANAGER!
        </div>
        <div className="mt-10 ml-16 md:ml-26 sm:ml-[200px] flex gap-3 md:ml-48">
          <TextField
            onChange={handleUserInput}
            value={userInput}
            variant="filled"
            placeholder="Add Items"
          />
          <Fab
            onClick={handleUserData}
            color="secondary"
            size="medium"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </div>
        <div>
          <ul>
            {items.map((item, index) => (
              <li
                key={item}
                className="text-[#797979] text-2xl md:pl-[200px] pl-[65px] pt-[20px] flex items-center "
              >
                <span className="mr-2">&#8226;</span>
                <span>{item}</span>
                <DeleteIcon
                  className="cursor-pointer text-[#AE81E7]"
                  onClick={() => handleDelete(index)}
                />
              </li>
            ))}
          </ul>

          <div className="flex justify-center items-center mt-4">
            {items.length > 1 ? (
              <Button onClick={RemoveAll} color="secondary" variant="contained">
                Remove All!
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* <div className="w-[1000px] bg-orange-600 h-[800px]  sm:w-[1000px] sm:bg-blue-500 sm:h-[800px] md:w-[1000px] md:bg-green-500 md:h-[800px]">
        <button>Button</button>
      </div> */}
    </div>
  );
};

export default Todo;
