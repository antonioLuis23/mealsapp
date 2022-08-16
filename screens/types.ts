import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

export type MealsOverviewNatigationProps = NativeStackScreenProps<
  StackParamList,
  "MealsOverview"
>;

export type MealDetailNatigationProps = NativeStackScreenProps<
  StackParamList,
  "MealDetail"
>;
