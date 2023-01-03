import React,{useContext} from "react";
import { View, Text, Platform } from "react-native";
import {Background,Container,AreaInput,Input,SubmitText,SubmitButton} from "../SignIn/styles"
import { AuthContext } from "../../contexts/auth";


export default function SignUp(){

  const {user} = useContext(AuthContext);

  function handleSignUp(){
    alert(user)
  }

  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding':''}
        enabled
      >
        <AreaInput>
          <Input
            placeholder="name"
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="email"
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="password"
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Create accountant</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  )
}
