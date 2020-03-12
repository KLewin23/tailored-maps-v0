import React from 'react';
import {WebView} from "react-native-webview";
const Html = require('./dist/index.html');

export default function App() {
    return (
        <WebView
            source={Html}
        />
    );
}
