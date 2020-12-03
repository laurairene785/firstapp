import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components';

function Login({}) {
    return(
        <Content>
            <Center>
                <H1>
                    Login
                </H1>
                <FormLabel>
                    Email
                </FormLabel>
                <TextInput testID="email" value="" onChangeText={() => }/>

                
                <FormLabel>
                    Password
                </FormLabel>
                <TextInput testID="password" value="" onChangeText={() =>}/>
                <FormAction>
                    <Button title= "Login" onPress={()=>}>

                    </Button>
                </FormAction>

            </Center>
        </Content>

    );
}
