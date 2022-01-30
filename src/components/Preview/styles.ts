import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  previewCard: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.gray900,
    borderRadius: 8,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  previewSubTitle: {
    marginTop: 8,
    color: theme.colors.text,
  },
});
