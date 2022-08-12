import { StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import { MealsOverviewNatigationProps } from "./types";

const MealsOverviewScreen = ({
  navigation,
  route,
}: MealsOverviewNatigationProps) => {
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen - {catId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
