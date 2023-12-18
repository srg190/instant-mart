import { render } from "App.test";
import FlexBoxTest from "./FlexBoxTest";
import { BoxConstant, FlexBoxConstant } from "Constants/testConstants";

describe("test form custom flexbox", () => {
  const { getByTestId } = render(<FlexBoxTest data="center" />);
  
  const flexBox = getByTestId(FlexBoxConstant.FLEXBOX_ID);
  const boxElem = getByTestId(BoxConstant.BOX_ID1);

  it("should get the css property of justify-content center", () => {
    expect(boxElem).toHaveTextContent(BoxConstant.BOX_TEXT);
    expect(flexBox).toHaveStyle(`justify-content: center`);
  });

});
