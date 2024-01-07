/* eslint-disable testing-library/render-result-naming-convention */
import WishList from "@/app/wishlist/page";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Enzyme, { render } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("wishlist", () => {
  it("should render Wishlist", () => {
    const page = render(<WishList />);
    expect(page).toMatchSnapshot();
  });
});
