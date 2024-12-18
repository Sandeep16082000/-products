import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#f5f5f5',

    },
    imagecon: {
        alignItems: 'center',
        marginTop: 30,

    },
    imagess: {
        width: 200,
        height: 200,
        resizeMode: 'stretch'
    },
    logtxt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        padding: 20,
        marginLeft: 22
    },
    inputContainer: {
        marginHorizontal: '12%',
        paddingVertical: 20,
        flexDirection: 'row'
    },
    emails: {
        width: 18,
        height: 18,

    },
    input: {
        height: 50,
        flex: 1,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingLeft: 18,
        fontSize: 16,
        top: -20,

    },
    locks: {
        width: 18,
        height: 18,
        top: -20
    },
    inputs: {
        height: 50,
        flex: 1,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingLeft: 18,
        fontSize: 16,
        color: 'grey',
        top: -36
    },
    showpasswordbtn: {
        position: 'absolute',
        right: 10,

    },
    showicon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    forgotPassword: {
        color: '#007BFF',
        textAlign: 'right',
        marginRight: 32,
        fontSize: 16,
        top: -30
    },
    loginButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginLeft: 20,

    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    OR: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 10,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
        width: '90%',
        marginLeft: 20,
        marginTop: 10,
        justifyContent: 'center',
    },
    googleimg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 40,
    }, googleButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    }, text: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    link: {
        fontSize: 15,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 3,
        marginTop: 20,
        textDecorationLine:'underline',
    },
})
export default styles;