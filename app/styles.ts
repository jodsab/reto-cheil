import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "@/assets/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  content: {
    width: '90%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'StarJedi',
    color: PRIMARY_COLOR,
    textAlign: 'center',
  },
  flatlist_container: {
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
  }
})

export default styles;