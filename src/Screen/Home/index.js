import { View, Text, Button, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Style from './Styles'

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([
    { id: 1, imags: require('../../Image/items/headphone1.png'), name: 'AKG Headphone', Price: '$199' },
    { id: 2, imags: require('../../Image/items/headphone2.png'), name: 'AIAIAI2Headphone', Price: '$209' },
    { id: 3, imags: require('../../Image/items/headphone3.png'), name: 'AIAIAI CN13Headphone', Price: '$299' },
    { id: 4, imags: require('../../Image/items/headphone4.png'), name: 'AKG CN123Headphone', Price: '$169' },
    { id: 5, imags: require('../../Image/items/headphone5.png'), name: 'AIAIAI CN52Headphone', Price: '$230' },
    { id: 6, imags: require('../../Image/items/headphone6.png'), name: 'AKG CN18Headphone', Price: '$125' },
    { id: 7, imags: require('../../Image/items/headphone7.png'), name: 'AIAIAI CN2Headphone', Price: '$520' },
    { id: 8, imags: require('../../Image/items/headphone8.png'), name: 'AKG CN20Headphone', Price: '$170' },
    { id: 9, imags: require('../../Image/items/headphone9.png'), name: 'AIAIAI CN13Headphone', Price: '$210' },
    { id: 10, imags: require('../../Image/items/headphone10.png'), name: 'AKG CN27Headphone', Price: '$218' },
  ]);
  const [Accessories, setAccessories] = useState([
    { id: 11, imogi: require('../../Image/items/adio1.png'), names: 'AIAIAI 3.5mm ', availability: 'Available', Prices: '$25.00' },
    { id: 12, imogi: require('../../Image/items/adio2.png'), names: 'IAI 2mm', availability: 'Unvailable', Prices: '$15.00' },
    { id: 13, imogi: require('../../Image/items/adio3.png'), names: 'AA 0.5mm ', availability: 'Available', Prices: '$30.00' },
    { id: 14, imogi: require('../../Image/items/adio4.png'), names: 'AI 31.5mm ', availability: 'Unvailable', Prices: '$52.00' },
    { id: 15, imogi: require('../../Image/items/adio5.png'), names: 'AII 3mm ', availability: 'Available', Prices: '$50.00' },
    { id: 16, imogi: require('../../Image/items/adio6.png'), names: 'AA 3.5mm ', availability: 'Unvailable', Prices: '$28.00' },
    { id: 17, imogi: require('../../Image/items/adio7.png'), names: 'Ajoy 3.5mm ', availability: 'Available', Prices: '$26.00' },
    { id: 18, imogi: require('../../Image/items/adio8.png'), names: 'AIAIAI 3.5mm ', availability: 'Unvailable', Prices: '$15.00' },
    { id: 19, imogi: require('../../Image/items/adio1.png'), names: 'AIA3.5mm ', availability: 'Available', Prices: '$29.00' },
    { id: 20, imogi: require('../../Image/items/adio1.png'), names: 'ALL 3.5mm ', availability: 'Unvailable', Prices: '$20.00' }
  ])
  const [showAll, setShowAll] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
 
  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const deleteAccessory = (id) => {
    setAccessories(Accessories.filter(Accessories => Accessories.id !== id));
  };
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const toggleShowAllAccessories = () => {
    setShowAccessories(!showAccessories);
  };
  const filteredProducts = products.filter(products =>
    products.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredAccessories = Accessories.filter(Accessories =>
    Accessories.names.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (

    <View style={Style.Continer}>
      <ScrollView>
        <View style={Style.header}>
          <TouchableOpacity style={Style.leftContainer}
            onPress={() => navigation.navigate('Login')}>
            <Image style={Style.leftimg}
              source={require('../../Image/items/leftv.png')} />
          </TouchableOpacity>
          <View style={Style.searchContainer}>
            <TextInput
              style={Style.searchInput}
              placeholder="Search..."
              placeholderTextColor='#000000'
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)} // Update search term
            />
          </View>
          <TouchableOpacity style={Style.rightContainer}>
            <Image style={Style.searchsty}
              source={require('../../Image/items/search.png')} />
          </TouchableOpacity>
        </View>
       
        <Text style={Style.title}>Hi-Fi Shop & Servies</Text>
        <Text style={Style.addressText}>Audio shop on Rustaveli Ave 57</Text>
        <Text style={Style.servicesText}>This shop offers both products and services.</Text>
        <Text style={Style.productText} >Products</Text>
        <Text style={Style.itemCountText}>{products.length} </Text>
        <TouchableOpacity onPress={toggleShowAll}>
          <Text style={Style.showAllText}>Show All</Text>
        </TouchableOpacity>
        <FlatList
          data={showAll ? filteredProducts : filteredProducts.slice(0, 2)}
          renderItem={({ item }) => (
            <View style={Style.productWrapper}>
              <View style={Style.productContainer}>
                <TouchableOpacity onPress={() => deleteProduct(item.id)}>
                  <Image style={Style.deleteimage}
                    source={require('../../Image/items/delete.png')} />
                </TouchableOpacity>
                <Image source={item.imags} style={Style.productImage} />
              </View>
              <Text style={Style.productName}>{item.name}</Text>
              <Text style={Style.productPrice}>{item.Price}</Text>
            </View>

          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={Style.productList}
        />
        <Text style={Style.Accessoriestxt}>Accessories</Text>
        <Text style={Style.Acclength}>{Accessories.length}</Text>
        <TouchableOpacity onPress={toggleShowAllAccessories}>
          <Text style={Style.showAllTexts}>Show All</Text>
        </TouchableOpacity>
        <FlatList
          data={showAccessories ? filteredAccessories : filteredAccessories.slice(0, 2)}
          renderItem={({ item }) => (
            <View style={Style.productWrappers}>
              <View style={Style.productContainer}>
                <TouchableOpacity onPress={() => deleteAccessory(item.id)}>
                  <Image style={Style.deleteimage}
                    source={require('../../Image/items/delete.png')} />
                </TouchableOpacity>
                <Image source={item.imogi} style={Style.productImage} />
              </View>
              <Text style={Style.productName}>{item.names}</Text>
              <Text style={{ color: item.availability === 'Available' ? 'green' : 'red', marginTop: 5, marginLeft: 30 }}>
                {item.availability}
              </Text>
              <Text style={Style.productPrice}>{item.Prices}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={Style.productList}
        />
        
      </ScrollView>
      <TouchableOpacity style={Style.circleContainer} onPress={()=>navigation.navigate('AddProduct')}>
      <Image style={[Style.plusv,{tintColor:'white'}]} source={require('../../Image/items/plusv.png')}/>
     </TouchableOpacity>
      
    </View>
  )
}

export default Home;