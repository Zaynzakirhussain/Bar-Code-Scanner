import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';

import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { render } from 'react-dom';

export default class ScanScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.getCameraPermissions}
                    style={styles.scanButton}
                    title = 'Barcode Scanner'>
                    <Text>Scan Qr Code</Text>
                </TouchableOpacity>
            </View>
        );
    }

    getCameraPermissions = async (id) => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);

        this.setState({
            /*status === "granted" is true when user has granted permission
              status === "granted" is false when user has not granted the permission
            */
            hasCameraPermissions: status === "granted",
            buttonState: id,
            scanned: false
        });
    }

    handleBarCodeScanned = async ({ type, data }) => {
        const { buttonState } = this.state

        if (buttonState === "BookId") {
            this.setState({
                scanned: true,
                scannedBookId: data,
                buttonState: 'normal'
            });
        }
        else if (buttonState === "StudentId") {
            this.setState({
                scanned: true,
                scannedStudentId: data,
                buttonState: 'normal'
            });
        }

    }
}

const styles = StyleSheet.create({
    scanButton: {
        marginTop: 300,
        marginLeft: 550,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "#ff9800",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
    }
});
