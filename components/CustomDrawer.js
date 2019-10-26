import React from "react";
import {  ScrollView, SafeAreaView, View } from "react-native";
import { DrawerItems } from "react-navigation";

const CustomDrawer = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 150, backgroundColor: "#3366FF"}}>
      </View>
      <ScrollView>
        <DrawerItems { ...props } />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;
