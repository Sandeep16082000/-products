import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    Continer: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,

    },
    leftContainer: {

        padding: 15,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        marginLeft: 10
    },
    leftimg: {
        width: 17,
        height: 17
    },
    searchContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingLeft: 10,
        fontSize: 16,
        color: '#000000'
    },
    rightContainer: {

        padding: 15,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        marginRight: 10
    },
    searchsty: {
        width: 17,
        height: 17
    },
    title: {
        marginLeft: 22,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10
    },

    addressText: {
        marginLeft: 22,
        fontSize: 17,
        marginTop: 10,
        color: 'grey'
    },
    servicesText: {
        marginLeft: 22,
        fontSize: 14,
        marginTop: 5,
        color: 'grey'

    },
    productText: {
        fontSize: 22,
        marginLeft: 22,
        marginTop: 10,
        color: '#000',
        fontWeight: "bold"
    },
    itemCountText: {

        fontSize: 20,
        color: 'gray',
        paddingLeft: '33%',
        top: -26

    },
    showAllText: {
        fontSize: 14,
        color: 'blue',
        textAlign: 'right',
        top: -50,
        marginRight: 10
    },
    productList: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productWrapper: {
        width: '49%', // To show 2 items per row
        marginBottom: 40

    },
    productContainer: {
        // width: '44%',
        // marginBottom: 20,
        backgroundColor: '#f1f1f1',
        padding: 30,
        borderRadius: 8,
        alignItems: 'center',
        position: 'relative',

        marginLeft: 20
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    productName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 20
    },
    productPrice: {
        fontSize: 14,
        color: 'grey',
        marginTop: 5,
        marginRight: '40%',
        marginLeft: 20
    },

    deleteimage: {
        width: 28,
        height: 28,
        position: 'absolute',
        left: 45,
        top: -20

    },
    Accessoriestxt: {
        color: 'blue',
        fontSize: 22,

        marginLeft: 20,
        color: '#000000',
        fontWeight: "bold"

    },
    Acclength: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 20,
        top: -28,
        paddingLeft: '40%'
    },
    showAllTexts: {
        fontSize: 14,
        color: 'blue',
        textAlign: 'right',
        top: -50,
        marginRight: 10
    },
    productWrappers: {
        width: '49%', // To show 2 items per row
        marginBottom: 70,
    },
    circleContainer: {
        position: 'absolute', 
               
        right: 20,            
        width: 60,            
        height: 60, 
        bottom:10,
        borderRadius: 30,     
        backgroundColor: 'blue',
      
      },
      plusv:{
      justifyContent:'center',
      alignSelf:'center',
      marginTop:12,
        width:30,
        height:30,
        resizeMode:'contain'
      }
});
export default Style;