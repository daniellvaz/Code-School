import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: "bold",
  },
  preview: {
    padding: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  section: {},
  contentHeader: {
    paddingVertical: 16,
  },
});
