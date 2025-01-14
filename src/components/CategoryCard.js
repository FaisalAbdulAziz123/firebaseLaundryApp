import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryCard = ({ category }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={category.icon} style={styles.icon} />
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  icon: { width: 50, height: 50 },
  name: { marginTop: 5, fontSize: 14 },
});

export default CategoryCard;
