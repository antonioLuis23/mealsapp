import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
};

export type MealsOverviewNatigationProps = NativeStackScreenProps<
  StackParamList,
  "MealsOverview"
>;
