import { Pressable, StyleSheet, Text, View } from "react-native";

type TextButtonProps = {
  label: string,
  onPress: any,
  theme: string,
}

const TextButton = (props: TextButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={props.theme == "primary" ? styles.buttonPrimaryRipple : styles.buttonSecondaryRipple} 
        style={props.theme == "primary" ? styles.buttonPrimary : styles.buttonSecondary} onPress={props.onPress}
      >
        <Text style={styles.buttonLabel}>{props.label}</Text>
      </Pressable>
  </View> 
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 40,
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 20,
    margin: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonPrimaryRipple: {
    color: '#88A6F9',
    borderless: true
  },
  buttonPrimary: {
    borderWidth: 0,
    backgroundColor: '#5B88FB',
    borderRadius: 15,
    width: "100%",
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondaryRipple: {
    color: '#F58D8D',
    borderless: true
  },
  buttonSecondary: {
    borderWidth: 0,
    backgroundColor: '#FB5B5B',
    borderRadius: 15,
    width: "100%",
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default TextButton;
