import App from "../App";
import "@testing-library/jest-dom/extend-expect";

describe("TodoApp", () => {
  it("renders app", () => {
    const toap = <App />;
    expect(toap).not.toBeUndefined();
  });
});
