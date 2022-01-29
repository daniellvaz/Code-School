import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 64,
    color: theme.colors.text,
    fontWeight: "bold",
    fontSize: 32,
  },
  subTitle: {
    color: theme.colors.text,
    marginTop: 8,
  },
  image: {
    position: "relative",
    left: "50%",
  },
  form: {
    height: 360,
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    height: 52,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: theme.colors.gray900,
    color: theme.colors.text,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.gray,
  },
  text: {
    textAlign: "center",
    color: theme.colors.text,
  },
  link: {
    color: theme.colors.primary,
  },
  button: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
});
