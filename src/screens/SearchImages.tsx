import { StyleSheet, Text, View } from "react-native";

const SearchImages = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Search Images</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#303030'
  },
  title: {
    fontSize: 40,
    margin: 10,
  },
});

export default SearchImages;
