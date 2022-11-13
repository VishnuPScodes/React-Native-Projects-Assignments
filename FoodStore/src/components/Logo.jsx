import {View,Image} from 'react-native'


export const Logo=()=>{
    return (
      <View>
        <Image
          style={{ alignSelf: "center", marginTop: 80 }}
          source={{
            uri: "https://i01.hsncdn.com/tablet/DG69341_KitchenFood.jpg?v=1",
            width: 400,
            height: 400,
          }}
        />
      </View>
    );
}