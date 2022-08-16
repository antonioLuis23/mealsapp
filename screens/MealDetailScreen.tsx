import { StyleSheet, Text, View } from "react-native";
import { MealDetailNatigationProps } from "./types";

const MealDetailScreen = ({ route }: MealDetailNatigationProps) => {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>MealDetailScreen - {mealId}</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
