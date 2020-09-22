
import React from "react";
import { render} from "@testing-library/react";
import App from "../App";

describe("App simple test", () => {
  test("simple test", async () => {
    const wrapper = render(<App/>);
  });
});
