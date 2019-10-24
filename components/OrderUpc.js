import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from "react-native";

const OrderUpc = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://www.orderbarcodes.com/serial_label_pricing.aspx"
          )
        }
      >
        <Text style={{ color: "blue", fontSize: 12, alignSelf: "center" }}>
          Out of softac UPC stickers? Order more here!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderUpc;
