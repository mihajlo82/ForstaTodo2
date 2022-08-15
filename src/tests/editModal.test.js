import "@testing-library/jest-dom/extend-expect";
import EditModal from "../components/EditModal";

describe("todoList", () => {
  it("render edit modal", () => {
    const addModal = <EditModal />;
    expect(addModal).not.toBeUndefined();
  });
});
