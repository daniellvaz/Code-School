import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  card: {
    width: 360,
    marginLeft: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardThumbnail: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardTitle: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: "bold",
  },
  cardSubTitle: {
    marginTop: 8,
    color: theme.colors.text,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardAvaliation: {},
  cardText: {
    color: theme.colors.text,
  },
  cardTextBold: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
