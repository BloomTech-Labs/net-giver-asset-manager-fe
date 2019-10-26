import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { AuthSession } from 'expo';

export default class CameraExample extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        type:
                                            this.state.type === Camera.Constants.Type.back
                                                ? Camera.Constants.Type.front
                                                : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                                {/* <View style={{ alignItems: 'center' }}>
                                    <FontAwesome style={{ color: 'white', alignItems: 'center' }} name="camera-retro" size={40} />
                                </View> */}
                            </TouchableOpacity>
                            {/* <View style={{
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginLeft: 100,
                                paddingHorizontal: 10, marginBottom: 15,
                                backgroundColor: 'orange'
                            }}>
                                <FontAwesome style={{
                                    color: 'white', alignItems: 'center', flex: 0.1,
                                    alignItems: 'flex-end',
                                }} name="camera-retro" size={40} onPress={() => navigation.navigate("AssetsList")} />
                            </View> */}
                        </View>
                        <SafeAreaView style={{
                            color: 'white', alignItems: 'center', flex: 0.1,
                            alignItems: 'center',
                            marginBottom: 95,
                            borderRadius: 50,
                            justifyContent: 'space-between',
                            paddingBottom: 30
                        }}>

                            <Text style={{
                                backgroundColor: 'magenta',
                                borderRadius: 50,
                                padding: 15
                            }} onPress={() => navigation.navigate("AssetsList")}>
                                <FontAwesome style={{
                                    color: 'white', alignItems: 'center',
                                }} name="camera-retro" size={40} onPress={() => navigation.navigate("AssetsList")} />
                            </Text>
                        </SafeAreaView>
                    </Camera>
                </View>
            );
        }
    }
}