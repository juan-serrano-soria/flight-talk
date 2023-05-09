import { Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

type IconDrawerButtonProps = {
  name: string,
  label: string,
  onPress: any,
}

const IconDrawerButton = (props: IconDrawerButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={styles.ripple}
        style={styles.pressable}
        onPress={props.onPress}
      >
        <Feather name={props.name} size={22} color={"black"} style={styles.icon} />
        <Text style={styles.text}>{props.label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection:'row',
    width: '100%',
    height: 40,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  ripple: {
    color: '#A9A9A9',
    borderless: true,
  },
  pressable: {
    flexDirection:'row',
    borderWidth: 0,
    borderRadius: 5,
    width: "100%",
    height: 40,
    alignItems: 'center',
  },
  icon: {
    margin: 10,
  },
  text: {
    fontSize: 15,
    color: 'black',
  }
});

export default IconDrawerButton;
