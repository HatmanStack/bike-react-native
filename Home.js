import React from 'react';
import { View, Image, Text } from 'react-native';


const Home = (props) => {
    return (
        <View style = {styles.container}>
            <Image 
                style={styles.globologo}
                source={require('./images/politics.png')}>
            </Image>
            <Text style={styles.title}>Knockout</Text>
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
        padding: 20
    },
    textcontainer:{
        textAlign: 'center',
        paddingTop: 10
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

