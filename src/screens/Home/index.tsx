import { Image, Text, View } from "react-native";
import { Title, ScreenContainer } from "./styles";

import SampleIcon from "../../assets/sammy-line-saas.png";

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <Image source={SampleIcon} style={{ width: 300, height: 300 }} />
      <Title>Oi</Title>
    </ScreenContainer>
  );
}
