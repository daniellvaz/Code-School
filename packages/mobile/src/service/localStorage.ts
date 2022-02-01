import AsyncStorage from "@react-native-async-storage/async-storage";

export default function setLocalStorage() {
  return {
    async setItem(key: string, data: string) {
      await AsyncStorage.setItem(key, data);
    },

    async getItem(key: string): Promise<string | undefined> {
      const data = await AsyncStorage.getItem(key);

      if (!data) {
        return;
      }

      return data;
    },
  };
}
