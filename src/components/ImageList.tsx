import { FlatList } from "react-native";
import ImageListItem from "./ImageListItem";

type ImageListProps = {
  images: any,
}

const ImageList = (props: ImageListProps) => {

  const DATA = Object.keys(props.images).map(key => ({
    base64: props.images[key]["base64"],
  }));

  return (
    <FlatList
      data={DATA}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => { return <ImageListItem base64={item.base64} />}}
    />
  )
}

export default ImageList;
