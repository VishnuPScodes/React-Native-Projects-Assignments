
import { Text } from 'react-native'
import { View ,Image} from 'react-native'


export const Details=(({route})=>{
     const { image, name } = route.params;
    return (
      <View>
        <Text>{name}</Text>
        <Image style={{ height: 530, width: 380 }} source={{ uri: image }} />
      </View>
    );
})