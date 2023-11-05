"use client";

import Swatches from "./Swatches";
import Fonts from "./Fonts";
import {
  CenteredRow,
  GrayRowContainer,
} from "../styles/components/containers/flex";
import { LabelText, DisplayText } from "../styles/components/typography";

export default function StyleSystem() {
  return (
    <main>
      <DisplayText margin={22}>Style System</DisplayText>
      <GrayRowContainer>
        <LabelText margin={22}>COLORS</LabelText>
        <CenteredRow>
          <Swatches />
        </CenteredRow>
      </GrayRowContainer>
      <GrayRowContainer>
        <LabelText margin={22}>FONTS</LabelText>
        <CenteredRow>
          <Fonts />
        </CenteredRow>
      </GrayRowContainer>
    </main>
  );
}
