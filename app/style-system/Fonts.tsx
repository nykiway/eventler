import { CenteredColumn } from "../styles/components/containers/flex";
import {
  DisplayText,
  Raleway,
  Merriweather,
  LabelText,
} from "../styles/components/typography";

const Fonts = () => {
  return (
    <CenteredColumn>
      <DisplayText margin={11}>Merriweather Display 28px</DisplayText>
      <Raleway>Raleway Paragraph 16px</Raleway>
      <Merriweather>Merriweather Paragraph 16px</Merriweather>
      <LabelText>Raleway LABEL 14px</LabelText>
    </CenteredColumn>
  );
};

export default Fonts;
