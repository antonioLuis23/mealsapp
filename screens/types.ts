import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  Drawer: undefined;
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
