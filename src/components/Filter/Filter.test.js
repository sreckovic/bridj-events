import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Filter from "./Filter";

configure({ adapter: new Adapter() });

describe("<Filter />", () => {
  it("it should have label if label prop is available", () => {
    const wrapper = shallow(<Filter label="some text" />);

    expect(wrapper.find("label")).toHaveLength(1);
  });
});
