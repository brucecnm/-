/**
 * Created by Administrator on 2016/12/25 0025.
 */
/**
 * Created by Administrator on 2016/12/25 0025.
 */
/**
 * Created by Administrator on 2016/12/25 0025.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView
} from 'react-native';

export default class Read extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {showText: true};

    }

    render() {
        return (
                <Text style={styles.welcome}>
                    读书列表
                </Text>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'flex-start',//flex-start、center、flex-end、space-around以及space-between
        //alignItems: 'center',
        flexDirection: 'column',//排列方向
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        //background:red
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    inputSheet: {
        width: 300,
        textAlign: 'center',
        color: '#b3b3b3'

    },
});
//输出组件类
module.exports = Read;
