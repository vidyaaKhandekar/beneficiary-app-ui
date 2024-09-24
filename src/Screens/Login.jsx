import { Text, View, Image } from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={{backgroundColor: '#121943', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
     <View style={{backgroundColor:'#121943',height:'40%',justifyContent:'flex-end',}}>
      <Image 
        source={require('../Asset/fastPass1.png')} 
          style={{marginBottom:90,width:240,height:78}}
      />
      </View> 
      <View style={{height:'60%',backgroundColor:'white',width:'100%',borderTopRightRadius:20,borderTopLeftRadius:20}}>  
        <Text>
            
        </Text>
      </View>
    </View>
  );
};

export default Login;
