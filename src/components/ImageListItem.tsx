import { useNavigation } from '@react-navigation/native';
import { Text, Pressable, StyleSheet, View, Image } from 'react-native';

type ImageListItemProps = {
  base64: string,
};

const ImageListItem = (props: ImageListItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.base64}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 0,
  },
  image: {
    height: 100,
    width: 200,
    marginTop: 10,
  }
});

export default ImageListItem;
