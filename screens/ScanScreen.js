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
        borderWidth: 1,
        height: 30,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    }
});
