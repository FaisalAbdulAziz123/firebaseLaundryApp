import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyLaundryScreen = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'T-Shirt', price: 2, quantity: 8, image: require('../assets/dryclean.png') },
    { id: 2, name: 'Jeans', price: 4, quantity: 2, image: require('../assets/dryclean.png') },
    { id: 3, name: 'Sweater', price: 8, quantity: 3, image: require('../assets/dryclean.png') },
    { id: 4, name: 'Formal Shirt', price: 3, quantity: 4, image: require('../assets/dryclean.png') },
  ]);

  const incrementQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price * item.quantity}.00</Text>
        <Text style={styles.itemSubPrice}>${item.price} / Item</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => decrementQuantity(item.id)}
          style={styles.quantityButton}
        >
          <Ionicons name="remove" size={16} color="black" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity
          onPress={() => incrementQuantity(item.id)}
          style={styles.quantityButton}
        >
          <Ionicons name="add" size={16} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>My Bucket</Text>
      </View>

      {/* Dropdown Placeholder */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownText}>Dry Clean</Text>
        <Ionicons name="chevron-down" size={16} color="black" />
      </View>

      {/* Item List */}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Price ({calculateTotalItems()})</Text>
          <Text style={styles.totalAmount}>${calculateTotal()}.00</Text>
        </View>
        <TouchableOpacity style={styles.scheduleButton}>
          <Text style={styles.scheduleButtonText}>Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F7F4',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#2C6A67',
    marginRight: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    height: 130,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C6A67',
  },
  itemSubPrice: {
    fontSize: 14,
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#E0F7F4',
    borderRadius: 5,
    padding: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  footer: {
    marginVertical: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalText: {
    fontSize: 16,
    color: 'gray',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scheduleButton: {
    backgroundColor: '#2C6A67',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
  },
  scheduleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default MyLaundryScreen;
