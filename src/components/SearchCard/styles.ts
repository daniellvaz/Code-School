import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: theme.colors.gray900,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.gray,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  header: {
    minWidth: 200,
    paddingHorizontal: 8,
    borderRightWidth: 1,
    borderRightColor: theme.colors.gray,
  },
  title: {
    color: theme.colors.text,
  },
  description: {
    marginTop: 8,
    fontSize: 8,
    color: theme.colors.text,
  },
  hour: {
    marginTop: 8,
    fontSize: 8,
    color: theme.colors.text,
  },
});
