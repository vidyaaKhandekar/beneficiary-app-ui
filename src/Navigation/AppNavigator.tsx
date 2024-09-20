import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from '../Component/BottomNavigator';



const Stack = createNativeStackNavigator();

function AppNavigator (){
    return (
        <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen options={{headerShown:false}} name="Profile Screen" component={BottomNavigator}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default AppNavigator;
