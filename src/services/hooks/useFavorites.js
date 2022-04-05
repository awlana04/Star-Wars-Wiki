import AsyncStorage from '@react-native-async-storage/async-storage';

const DB_KEY = '@StarWarsWiki:favorites';

export const useFavorites = () => {
  const addFavorite = async data => {
    try {
      let newDb;

      const value = await AsyncStorage.getItem('@StarWarsWiki:favorites');

      if (value !== null) {
        const db = JSON.parse(value);

        newDb = Array[db].push(data);
      } else {
        newDb = [...db, data];
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

        newDb = Array[db].filter(
          item => item.id !== data.id && item.type !== data.type,
        );
      } else {
        newDb = [];
      }

      const jsonValue = JSON.stringify(newDb);

      await AsyncStorage.removeItem(DB_KEY, jsonValue);
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
