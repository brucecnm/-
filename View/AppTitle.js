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

import React, { Component,PropTypes  } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform
} from 'react-native';

export default class Title extends Component {
    //static defaultProps = {
    //    title: '标题',
    //};
    //static propTypes = {
    //    title: React.PropTypes.string.isRequired,
    //};
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        //是否显示返回按钮
        this.state = {showBackImage: true};

    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri:'icon_back'}} style={styles.imageStyle}/>
                <Text style={styles.titleStyle}>
                    { this.props.title}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'flex-start',//flex-start、center、flex-end、space-around以及space-between
        //alignItems: 'center',
        flexDirection: 'row',//排列方向
        height:Platform.OS==='ios'?25:20,
        backgroundColor: '#F5FCFF',
    },
    imageStyle: {
        width: Platform.OS==='ios'?20:15,
        height:Platform.OS==='ios'?20:15,
        marginLeft:16

    },
    titleStyle:{
        flex: 1,
        fontSize:15,
        height:Platform.OS==='ios'?25:20,

    }
});
//输出组件类
module.exports = Title;
