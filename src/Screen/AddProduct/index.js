
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ToastAndroid ,FlatList} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'
import style from "./style";
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const loadProducts = async () => {
            const storedProducts = await AsyncStorage.getItem('products');
            if (storedProducts) {
                setProducts(JSON.parse(storedProducts));
            }
        };
        loadProducts();
    }, []);
    const handleImagePicker = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);

            } else {
                if (response.assets && response.assets.length > 0) {
                    const imageUri = response.assets[0].uri;
                    setProductImage(imageUri);  //
                }
            }
        })
    }
    const handleAddProduct = async () => {
        if (!productName || !productPrice) {
            ToastAndroid.show('Please enter both product name and price', ToastAndroid.SHORT)
            return;
        }

        const duplicateProduct = products.find(product => product.name.toLowerCase() === productName.toLowerCase());
        if (duplicateProduct) {
            ToastAndroid.show('Product already exists', ToastAndroid.SHORT);
            return;
        }
        setLoading(true);
        try {
            const newproduct = { name: productName, price: productPrice, image: productImage }
            const updateproduct = [...products, newproduct];
            await AsyncStorage.setItem('product', JSON.stringify(updateproduct));
            setProducts(updateproduct);
            setProductName('');
            setProductPrice('');
            setProductImage(null);
            ToastAndroid.show('Product added successfully', ToastAndroid.SHORT);
        } catch (error) {
            ToastAndroid.show('Error adding product', ToastAndroid.SHORT);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const handleDeleteProduct = async (productName) => {
        const updatedProducts = products.filter(product => product.name !== productName);
        await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
        ToastAndroid.show('Product deleted', ToastAndroid.SHORT);
    };
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <View style={style.continer}>
            <TextInput
                style={style.inputfild1}
                placeholder="Product Name"
                placeholderTextColor='grey'
                value={productName}
                onChangeText={setProductName}
            />
            <TextInput
                style={style.inputfild2}
                placeholder="Product Price"
                value={productPrice}
                keyboardType="numeric"
                onChangeText={setProductPrice}
            />
            <TouchableOpacity style={style.tochb} onPress={handleImagePicker}>
                <Text style={style.imagtxt}>Choose Image</Text>
            </TouchableOpacity >
            {
                productImage && (
                    <Image source={{ uri: productImage }} />
                )
            }
            <TouchableOpacity style={style.addProductButton} onPress={handleAddProduct}>
                <Text style={style.buttonText}>Add Product</Text>
            </TouchableOpacity>
            {loading && <Text>Loading...</Text>}
            <TextInput
                placeholder="Search Products"
                placeholderTextColor='grey'
                value={searchTerm}
                onChangeText={setSearchTerm}
                style={style.input}
            />
            {filteredProducts.length === 0 ? (
                <Text>No Product Found</Text>
            ) : (
                <FlatList
                    data={filteredProducts}
                    renderItem={({ item }) => (
                        <View style={style.productItem}>
                            <Image source={{ uri: item.image }} style={style.productImage} />
                            <Text style={style.nmtxt}>{item.name}</Text>
                            <Text style={style.prictext}>{item.price}</Text>
                            <TouchableOpacity 
                            onPress={() => handleDeleteProduct(item.name)}>
                                <Text style={style.deleteTex}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item) => item.name}
                />
            )}
            <Toast />
        </View>
    )
}
export default AddProduct;