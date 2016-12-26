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
    Image,
    Navigator,
    Platform
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
var Read = require('../Read/Read.js');
var Write = require('../Write/Write.js');
var Mine = require('../Mine/Mine.js');
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'read'};

    }

    render() {
        return (
            <TabNavigator style={styles.container}>
                {this.renderTabBarItem('阅读', 'icon_read_n', 'icon_read_f', 'read', '阅读', Read)}
                {this.renderTabBarItem("写作", "icon_write_n", "icon_write_f", "write", "写作", Write)}
                {this.renderTabBarItem("我的", "icon_mine_n", "icon_mine_f", "mine", "我的", Mine)}
            </TabNavigator>
        );
    }

    renderTabBarItem(title, iconName, selectIconName, selectTab, componentName, component, badgeText) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectTab}
                title={title}
                renderIcon={() => <Image source={{uri:iconName}}  style={styles.imageStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:selectIconName}} style={styles.imageStyle} />}
                onPress={() => {this.setState({ selectedTab: selectTab })}}
                badgeText={badgeText}
            >
                <Navigator initialRoute={{name:componentName,component:component}}
                           configureScene={()=>{
                               return Navigator.SceneConfigs.PushFromRight;
                               }}
                           renderScene={(route,navigator)=>{
                               let Component=route.component;
                               return <Component {...route.passProps} navigator={navigator}/>;
                               }}
                />
            </TabNavigator.Item>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom:7
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
    imageStyle: {
        width: Platform.OS==='ios'?30:25,
        height:Platform.OS==='ios'?30:25

    },
});
//输出组件类
module.exports = Main;
