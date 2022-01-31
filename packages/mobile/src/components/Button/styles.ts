import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "90%",
    left: "85%",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  },
  content: {
    color: theme.colors.text,
    fontSize: 16,
  },
});
