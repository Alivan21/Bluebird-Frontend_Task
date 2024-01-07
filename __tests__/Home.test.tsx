/* eslint-disable testing-library/render-result-naming-convention */
import Home from "@/app/(home)/page";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Enzyme, { render } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("Home", () => {
  it("should render Home", () => {
    const page = render(<Home />);
    expect(page).toMatchSnapshot();
  });
});
