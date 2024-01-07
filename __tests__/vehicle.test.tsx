/* eslint-disable testing-library/render-result-naming-convention */
import Vehicle from "@/app/vehicle/[slug]/page";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Enzyme, { render } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("Vehicle", () => {
  it("should render Vehicle", () => {
    const page = render(
      <Vehicle
        params={{
          slug: "/regular",
        }}
      />
    );
    expect(page).toMatchSnapshot();
  });
});
