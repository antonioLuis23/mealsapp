import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import { MealsOverviewNatigationProps } from "./types";

const CategoriesScreen = ({ navigation }: MealsOverviewNatigationProps) => {
  const renderCategoryItem = (itemData: { item: Category }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item: Category) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
