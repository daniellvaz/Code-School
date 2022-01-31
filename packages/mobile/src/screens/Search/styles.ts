import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 64,
    marginTop: 32,
  },
  content: {
    height: "100%",
    padding: 16,
  },
  inputContainer: {
    height: 48,
    marginBottom: 32,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.background,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
  },
  input: {
    width: "90%",
    color: theme.colors.text,
  },
});
