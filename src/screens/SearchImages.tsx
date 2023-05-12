import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import SearchImageInputBox from "../components/SearchImageInputBox";

const SearchImages = () => {
  const [currentSearch, setCurrentSearch] = useState("");

  const onSearch = () => {
    if (!currentSearch.replace(/\s/g, '').length) {
      setCurrentSearch("");
      return
    }

    console.log("Search for: " + currentSearch);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Search Images</Text>
      </View>
      <View style={styles.searchContainer}>
        <SearchImageInputBox currentText={currentSearch} onChangeText={setCurrentSearch} onSearch={onSearch} />
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
  searchContainer: {
    marginHorizontal: 10,
  },
});

export default SearchImages;
