import UU5 from "uu5g04";
import UuSubjecttermman from "uu_subjecttermman_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuSubjecttermman.Routes.CreateStudent`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuSubjecttermman.Routes.CreateStudent />);
    expect(wrapper).toMatchSnapshot();
  });
});
