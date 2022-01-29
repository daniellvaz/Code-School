import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 32,
    fontSize: 48,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  image: {
    width: "100%",
    marginTop: 64,
  },
  button: {
    width: 64,
    height: 64,
    padding: 16,
    position: "absolute",
    top: "90%",
    left: "85%",
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
