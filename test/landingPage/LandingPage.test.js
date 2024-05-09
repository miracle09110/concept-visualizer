import renderer from "react-test-renderer";
import LandingPage from "../../src/pages/landingPage/landingPage";

describe('LandingPage', () => {
  it('renders', () => {
    //Arrange
    const component = renderer
      .create(<LandingPage/>)
      .toJSON()

    //Act


    //Assess
    expect(component).toMatchSnapshot()
  })
})