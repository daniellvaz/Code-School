import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 120,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: theme.colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  title: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: "bold",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
});
