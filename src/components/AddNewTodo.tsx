import React from 'react';
import { AiOutlinePlusSquare } from "react-icons/ai";

type addInterface = {
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNewTodo = ({ setEditing, setShowEditModal }: addInterface) => {

 return (
    <section className="addWrapp">
      <AiOutlinePlusSquare 
        style={{ fontSize: "26px", marginLeft: "4px", cursor:'pointer' }}
        onClick={():void => {
          setEditing(false);
          setShowEditModal(true);
        }}
      />
    </section>
  );
};

export default AddNewTodo;
