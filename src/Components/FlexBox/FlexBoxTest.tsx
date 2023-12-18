import Box from "Components/Box";
import FlexBetween from ".";
import { BoxConstant, FlexBoxConstant } from "Constants/testConstants";

const FlexBoxTest = ({ data }: { data: string }) => {
  return (
    <FlexBetween data-testid={FlexBoxConstant.FLEXBOX_ID} justifyContent={data}>
      <Box
        data-testid={BoxConstant.BOX_ID1}
        width="100px"
        height="100px"
        bgColor="red"
      >
        {BoxConstant.BOX_TEXT}
      </Box>
      <Box width="100px" height="100px" bgColor="red">
        {BoxConstant.BOX_TEXT}
      </Box>
      <Box width="100px" height="100px" bgColor="red">
        {BoxConstant.BOX_TEXT}
      </Box>
      <Box width="100px" height="100px" bgColor="red">
        {BoxConstant.BOX_TEXT}
      </Box>
    </FlexBetween>
  );
};
export default FlexBoxTest;
