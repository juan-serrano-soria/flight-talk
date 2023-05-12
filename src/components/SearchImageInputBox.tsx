import { Pressable, StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";

type SearchImageInputBoxProps = {
  currentText: string,
  onChangeText: any,
  onSearch: any,
}

const SearchImageInputBox = (props: SearchImageInputBoxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeText}
          value={props.currentText}
        />
      </View>
      <View style={styles.iconContainer}>
      <Pressable
        android_ripple={styles.ripple}
        style={styles.pressable}
        onPress={props.onSearch}
      >
        <Feather name={'search'} size={30} color={"#A0A0A0"} />
      </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#A0A0A0',
    borderRadius: 15,
  },
  iconContainer: {
    width: '15%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    color: '#737373',
    borderless: true,
  },
  pressable: {
    borderWidth: 0,
    borderRadius: 15,
    width: 60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '85%',
    padding: 0,
  },
  input: {
    height: 40,
    width: '100%',
    margin: 0,
    padding: 10,
  },
});

export default SearchImageInputBox;
