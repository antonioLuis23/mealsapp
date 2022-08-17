import React from "react";
import { StyleSheet, FlatList, View, ListRenderItemInfo } from "react-native";
import Meal from "../../models/meal";
import MealItem from "./MealItem";

type MealsListProps = {
  items: Meal[];
};
const MealsList = ({ items }: MealsListProps) => {
  const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
