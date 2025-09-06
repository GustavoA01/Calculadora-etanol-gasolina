import { StyleSheet } from "react-native"
import { Colors } from "../../constants/Colors"

export const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#865be2ff',
    display: 'flex',
    height: 30,
    marginBottom: 10,
    marginTop: 15,
  },

  appBarTitle: {
    color:  Colors.dark.text,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  container: {
    backgroundColor: Colors.dark.background,
    height: "100%",
    paddingInline: 16,
    paddingTop: 16
  },

  input: {
    padding: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'green',
    color: Colors.dark.text,
  },

  text: {
    color: Colors.dark.text,
  },

  inputContainer:{
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginBottom: 24
  },

  message:{
    textAlign:'center',
    color: '#10c036ff',
    marginTop: 12,
  }  
})
