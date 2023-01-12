import React from 'react';
import { View, Image, Text } from 'react-native';


const Home = (props) => {
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>Test</Text>
            <Image 
                style={styles.globologo}
                source={require('./images/politics.png')}>
            </Image>
            <Text style={styles.title}>{props.username}</Text>
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
        </View>
    );

}

const introText = 'knockout'


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flex:1
    },
    textcontainer:{
        padding: 20
    },
    globologo: {
        height: 100,
        width: 150
    },
    title:{
        fontFamily: 'Ubuntu-Regular',
    },
    subtitle:{
        paddingTop: 5,
	fontFamily: 'Ubuntu-Regular'    
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300'
    }
});

export default Home;

