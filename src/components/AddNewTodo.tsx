import React from 'react';
import { AiOutlinePlusSquare } from "react-icons/ai";

type addInterface = {
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNewTodo = ({ setEditing, setShowEditModal }: addInterface) => {

  const buttonHandler = () => {
  //  event.preventDefault();
//
   // const button: HTMLButtonElement = event.currentTarget;
    setEditing(false);
    setShowEditModal(true);
  };

  return (
    <section className="addWrapp" onClick={buttonHandler}>
      <AiOutlinePlusSquare 
      //  style={{ fontSize: "26px", marginLeft: "4px" }}
        // onClick={():void => {
        //   setEditing(false);
        //   setShowEditModal(true);
        // }}
      />
    </section>
  );
};

export default AddNewTodo;
