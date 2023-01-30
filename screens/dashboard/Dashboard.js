import {useState} from "react";
import {View, Button, Image, ScrollView, ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Orders from './Orders';
import Product from './Product';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const ProductsTitle="Product";
const DefaultTitle="Default";
const OrderTitle="Order";

export default function Dashboard(){


    return(

           <Tabs.Navigator initialRouteName={DefaultTitle} screenOptions={(route)=>{
           }
           }>
               <Tabs.Screen name={ProductsTitle} component={Product}/>
               <Tabs.Screen name={OrderTitle} component={Orders}/>

           </Tabs.Navigator>

    )
}

