import AddNewTodo from "../components/AddNewTodo";
import "@testing-library/jest-dom/extend-expect";
import { AiOutlinePlusSquare } from "react-icons/ai";

describe("Add new todo", () => {
  it("renders add new todo", () => {
    const addTodo = <AddNewTodo />;
    expect(addTodo).not.toBeUndefined();
  });

  it("check icon add", () => {
    const addIcon = <AiOutlinePlusSquare />;
    expect(addIcon).not.toBeUndefined();
  });
});
