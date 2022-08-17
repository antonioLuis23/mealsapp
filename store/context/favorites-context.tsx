import { createContext, useState } from "react";

type FavoritesContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};
export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

type FavoritesContextProviderType = {
  children: React.ReactNode;
};
const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderType) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);
  const addFavorite = (id: string) => {
    setFavoriteMealIds((currentFavIds: string[]) => [...currentFavIds, id]);
  };
  const removeFavorite = (id: string) => {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
