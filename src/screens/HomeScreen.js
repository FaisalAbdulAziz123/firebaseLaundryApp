import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const categories = [
  { id: 1, title: 'Dry Clean', icon: require('../assets/dryclean.png') },
  { id: 2, title: 'Laundry', icon: require('../assets/mesinCuci.png') },
  { id: 3, title: 'Iron', icon: require('../assets/ironing.png') },
];

const popularLaundry = [
  {
    id: 1,
    image: require('../assets/ruangan.jpg'),
    rating: 4.5,
    title: 'Laundry Store',
  },
];

const HomeScreen = () => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={item.icon} style={styles.categoryIcon} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderPopularItem = ({ item }) => (
    <View style={styles.popularItem}>
      <Image source={item.image} style={styles.popularImage} />
      <Text style={styles.popularRating}>
        <Ionicons name="star" size={16} color="#FFD700" /> {item.rating}
      </Text>
      <Text style={styles.popularTitle}>{item.title}</Text>
      
    </View>
    
    
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={24} color="black" />
        <View>
          <Text style={styles.location}>Sukabumi</Text>
          <Text style={styles.date}>Wed, 29 Jan 2025</Text>
        </View>
        <Image
          source={require('../assets/faisal.jpg')}
          style={styles.profileImage}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Find Laundry Store ..."
        />
        <Ionicons name="search-outline" size={24} color="gray" />
      </View>

      {/* Category */}
      <Text style={styles.sectionTitle}>Category</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.categoryList}
      />

      {/* Promo */}
      <View style={styles.promoContainer}>
        <View>
          <Text style={styles.promoText}>Get 30% on Dry Clean</Text>
          <Text style={styles.promoCode}>CODE: DRYCLEAN30</Text>
        </View>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>Book Now</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/diskon.png')}
          style={styles.promoImage}
        />
      </View>
      

      {/* Popular Laundry */}
      
      <Text style={styles.sectionTitle}>Popular Laundry 🔥</Text>
      <FlatList
        data={popularLaundry}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderPopularItem}
        keyExtractor={(item) => item.id.toString()}
      />
      
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoryList: {
    marginVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 120,
    height: 110,
    marginHorizontal: 5,
    elevation: 2,
    justifyContent: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  promoContainer: {
    backgroundColor: '#E0F7F4',
    borderRadius: 25,
    padding: 20,
    flexDirection: "column",
    // alignItems: 'center',
    // justifyContent: 'space-between',
    marginVertical: 20,
    position: 'relative',
    height: 'auto', // Agar tinggi container menyesuaikan kontennya
    marginTop: 35,
  },
  promoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C6A67',
  },
  promoCode: {
    fontSize: 14,
    color: '#6A6A6A',
    marginVertical: 5,
  },
  promoButton: {
    backgroundColor: '#2C6A67',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 150,
    height: 40,
    marginTop: 10,
  },
  promoButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
  },
  promoImage: {
    width: 180,
    height: 100,
    position: 'absolute',
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginRight: 10,
    marginLeft: 30,
  },
  popularItem: {
    width: 355  ,
    height: 250,
    marginHorizontal: -15,
    backgroundColor: 'white',
    borderRadius: 20,
    // overflow: 'hidden',
    elevation: 2,
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    marginRight: 30,
  },
  popularImage: {
    width: 300,
    height: 200,
    // marginRight: 45,
    borderRadius: 30,
    alignItems:'center',
    justifyContent: 'center',
    marginLeft: 50,
  },
  popularRating: {
    marginTop: -195,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    alignItems:'center',
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 190,
    // backgroundColor: 'white',
    borderRadius: 10,
  },
  popularTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'white',
    marginLeft: 42,
    marginRight: 170,
  },
});

export default HomeScreen;
