import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native';


import myAvatar from './assets/Jasper.jpg';

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#f5f5f5' }]}>
      <View style={styles.profileHeader}>
        <Image 
          source={myAvatar}
          style={styles.avatar}
        />
        <Text style={[styles.joinedText, { color: darkMode ? '#b0b0b0' : '#555' }]}>Joined 1 year ago</Text>
      </View>

      <View style={styles.profileSection}>
        <Text style={[styles.nameText, { color: darkMode ? '#fff' : '#000' }]}>Jasper Galamiton</Text>
      </View>

      <View style={styles.optionsSection}>
        <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Profile</Text>
        <TouchableOpacity>
          <Text style={[styles.subOptionText, { color: darkMode ? '#b0b0b0' : '#555' }]}>Manage user</Text>
        </TouchableOpacity>
        <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Settings</Text>
        <TouchableOpacity>
          <Text style={[styles.subOptionText, { color: darkMode ? '#b0b0b0' : '#555' }]}>Notifications</Text>
        </TouchableOpacity>
        <View style={styles.darkModeRow}>
          <Text style={[styles.subOptionText, { color: darkMode ? '#b0b0b0' : '#555' }]}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>
      </View>

      <TouchableOpacity style={styles.signOutButton}>
        <Text style={[styles.signOutText, { color: darkMode ? '#b0b0b0' : '#555' }]}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 60, 
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 100, 
    height: 100,
    borderRadius: 50,
    marginRight: 15, 
    borderWidth: 3,
    borderColor: '#ddd',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  joinedText: {
    fontSize: 16,
    fontStyle: 'italic', 
  },
  profileSection: {
    alignItems: 'flex-start', 
    marginBottom: 50,
  },
  nameText: {
    fontSize: 30, 
    fontWeight: 'bold',
    letterSpacing: 1, 
  },
  optionsSection: {
    marginBottom: 30,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd', 
  },
  optionText: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: '600',
  },
  subOptionText: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 25,
    color: '#888',
  },
  darkModeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  signOutButton: {
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#eee', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10, 
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  signOutText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
