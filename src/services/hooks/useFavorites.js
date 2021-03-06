import AsyncStorage from '@react-native-async-storage/async-storage';

const DB_KEY = '@StarWarsWiki:favorites';

export const useFavorites = () => {
  const addFavorite = async data => {
    try {
      let newDb;

      const value = await AsyncStorage.getItem(DB_KEY);

      if (value !== null) {
        const db = JSON.parse(value);

        newDb = [...db, data];
      } else {
        newDb = [data];
      }

      const jsonValue = JSON.stringify(newDb);

      await AsyncStorage.setItem(DB_KEY, jsonValue);

      return newDb;
    } catch (error) {
      console.log({ error });

      return { error };
    }
  };

  const getFavorites = async () => {
    const value = await AsyncStorage.getItem(DB_KEY);

    if (value !== null) {
      const db = JSON.parse(value);

      return db;
    }

    return [];
  };

  const removeFavorite = async data => {
    try {
      let newDb;

      const value = await AsyncStorage.getItem(DB_KEY);

      if (value !== null) {
        const db = JSON.parse(value);

        newDb = db.filter(
          item => item.id !== data.id && item.title !== data.title,
        );
      } else {
        newDb = [];
      }

      const jsonValue = JSON.stringify(newDb);

      await AsyncStorage.setItem(DB_KEY, jsonValue);

      return newDb;
    } catch (error) {
      console.log({ error });

      return { error };
    }
  };

  return {
    addFavorite,
    getFavorites,
    removeFavorite,
  };
};
