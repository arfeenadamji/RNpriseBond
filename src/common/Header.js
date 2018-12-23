import React from 'react';
import{Text , style  , View} from 'react-native';

const Header = (props) => {


    return(
        <View style={styles.viewStyle}>
    
              <Text style={styles.textStyle}>{props.title}</Text>
        </View>

    );
};
const styles ={
    viewStyle:{
        backgroundColor: '#f8f8f8',
        jusifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOfsfset:{width: 0, height:2},
        shadowOpacity:0.2,
        elevation:2,
        //position:'relative'
    },
    textStyle:{
        color: 'black',
        fontSize: 20 , 
      
    }
};
export default Header;