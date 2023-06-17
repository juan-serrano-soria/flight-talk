import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import SearchImageInputBox from "../components/SearchImageInputBox";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase";
import ImageList from "../components/ImageList";

const SearchImages = () => {
  const [currentSearch, setCurrentSearch] = useState("");
  const [imagesId, setImagesId] = useState("BADBADBAD");
  const [images, setImages] = useState({});

  useEffect(() => {
    const iamgesRef = ref(database, 'images/' + imagesId);
    onValue(iamgesRef, (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        setImages(data);
      } else {
        setImages({});
      }
    });
  }, [imagesId]);

  const getImages = async (search: string) => {
    try {
      const response = await fetch(`192.168.1.130:3000/images/${search}`);
      const json = await response.json();
      setImagesId(json);
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  const onSearch = () => {
    if (!currentSearch.replace(/\s/g, '').length) {
      setCurrentSearch("");
      return
    }
    getImages(encodeURI(currentSearch));
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Search Images</Text>
      </View>
      <View style={styles.searchContainer}>
        <SearchImageInputBox currentText={currentSearch} onChangeText={setCurrentSearch} onSearch={onSearch} />
      </View>
      { Object.keys(images).length !== 0 ? <ImageList images={images} /> : <></> }
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
    color: '#c1c1c1',
  },
  searchContainer: {
    marginHorizontal: 10,
  },
});

export default SearchImages;
