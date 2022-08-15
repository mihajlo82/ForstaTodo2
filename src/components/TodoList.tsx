import React, { useState } from "react";
import AddNewTodo from "./AddNewTodo";
import EditModal from "./EditModal";
import SingleTodo from "./SingleTodo";

type TodoInterface = {
    id: Number,
    text: string,
    done: boolean,
};

type TodoListProps = {
  todos : Array<TodoInterface>;
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: Number;
        text: string;
        done: boolean;
      }[]
    >
  >;
};

 const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [editedTodo, setEditedtodo] = useState<TodoInterface>();
  const [editing, setEditing] = useState(true);

  const onDelete = (id: Number): void => {
    let filteredTodos = [...todos].filter((x) => x.id !== id);
    setTodos(filteredTodos);
  };

  const onEdit = (id: Number): void => {
    setEditing(true);
    setShowEditModal(true);

    let todoEdit = [...todos].find((x) => x.id === id);
    setEditedtodo(todoEdit);
  };

  return (
    <>
      <section className="todoList">
        <AddNewTodo
          setEditing={setEditing}
          setShowEditModal={setShowEditModal}
        />

        {todos.map((item, i) => (
          <SingleTodo
            key={item.id.toString()}
            item={item}
            i={i}
            todos={todos}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </section>

      {showEditModal && (
        <EditModal
          editedTodo={editedTodo}
          setShowEditModal={setShowEditModal}
          todos={todos}
          setTodos={setTodos}
          editing={editing}
        />
      )}
    </>
  );
};

export default TodoList;