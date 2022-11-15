import {View ,FlatList ,Text,StyleSheet ,TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from './redux/action';


export const TodoList=()=>{
    const dispatch=useDispatch();
   
    const handlePress=(item)=>{
        dispatch(changeStatus(item.id));
    }
    const datas=useSelector((state)=>state.todo)
    return <>
        <FlatList data={datas} renderItem={({item})=>{
            return (
              <View style={styles.container}>
                {item.status == true ? (
                  <Text>Done</Text>
                ) : (
                  <Text style={styles.text}>{item.todo}</Text>
                )}
                <View style={styles.date}>
                  <TouchableOpacity
                    onPress={() => {
                      handlePress(item);
                    }}
                    style={styles.button}
                  >
                    <Text style={styles.bText}>Delete</Text>
                  </TouchableOpacity>
                  <Text style={styles.dateText} >{item.date}</Text>
                </View>
              </View>
            );
        }} />
    </>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: "#474d4e",
  },
  container: {
    minHeight: 50,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 16,
    flex: 1,
    flexDirection: "column",
  },
  button: {
    width: 70,

    backgroundColor: "grey",
    height: 30,
    marginTop: 10,
    borderRadius: 20,
    marginRight: 1,
  },
  bText: {
    color: "white",
    textAlign: "center",
    paddingTop: 5,
  },
  date: {
    flex: 1,
    flexDirection: "row",
  },
  dateText: {
    paddingTop: 10,
    paddingLeft: 20,
    fontStyle: "italic",
    color: "#474d4e",
  },
});