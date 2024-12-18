import { StyleSheet } from 'react-native';
const style = StyleSheet.create({
    continer: {
        flex:1,
        padding: 20,
    },
    inputfild1: {
        borderBottomWidth: 1,
        marginBottom: 10,
        color: '#000',
        fontSize: 15,
        padding:5
    },
    inputfild2: {
        borderBottomWidth: 1,
        marginBottom: 10,
        color: '#000',
        fontSize: 15,
        padding:5

    },
    tochb: {
        marginBottom: 20,
        marginTop: 20
    },
    imagtxt: {
        color: 'blue',
        fontSize: 15,
    },
    imgessize: {

        width: 100,
        height: 100,
        resizeMode: 'cover'

    },
    addProductButton: {
        paddingVertical: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
      },
      input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 10,
        fontSize:15,
        color:'#000',
        marginTop:10
      },
      nmtxt:{
        color:'#000',
        marginLeft:20,
        marginTop:10
      },
      prictext:{
        color:'#000',
        marginLeft:20,
        marginTop:10
      },
      deleteTex:{
        fontSize:16,
        color:'#000000',
        marginTop:10
      }
})
export default style;