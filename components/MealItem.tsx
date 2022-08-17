import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Meal from "../models/meal";
import MealDetails from "./MealDetails";

type MealItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};
const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealItemProps) => {
  const navigation = useNavigation();
  const selectMealItemHandler = () => {
    navigation.navigate(
      "MealDetail" as never,
      {
        mealId: id,
      } as never
    );
  };

  return (
    <View style={styles.mealContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.mealItem,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={selectMealItemHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealContainer: {
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 8,
    margin: 16,
  },
  mealItem: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
