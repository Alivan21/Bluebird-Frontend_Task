/* eslint-disable testing-library/render-result-naming-convention */
import Search from "@/app/search/page";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Enzyme, { render } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("search", () => {
  it("should render Search", () => {
    const page = render(<Search />);
    expect(page).toMatchSnapshot();
  });
});
