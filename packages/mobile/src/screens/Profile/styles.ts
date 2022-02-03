import { theme } from "../../global/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 120,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 80,
    marginBottom: -80,
  },
  content: {
    height: 90,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  link: {
    fontSize: 12,
    color: theme.colors.primary,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  form: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    height: 48,
    marginBottom: 8,
    paddingHorizontal: 8,
    backgroundColor: theme.colors.gray900,
    color: theme.colors.text,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.gray,
  },
  inputDate: {
    width: "49%",
    height: 52,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: theme.colors.gray900,
    color: theme.colors.text,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.gray,
  },
  ageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 8,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: theme.colors.text,
  },
});
