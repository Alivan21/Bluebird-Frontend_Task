/* eslint-disable testing-library/render-result-naming-convention */
import MyBook from "@/app/mybook/page";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Enzyme, { render } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("myBook", () => {
  it("should render MyBook", () => {
    const page = render(<MyBook />);
    expect(page).toMatchSnapshot();
  });
});
