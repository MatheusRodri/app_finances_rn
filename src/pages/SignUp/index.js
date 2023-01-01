import React from "react";
import { View, Text, Platform } from "react-native";
import {Background,Container,AreaInput,Input,SubmitText,SubmitButton} from "../SignIn/styles"

export default function SignUp(){
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

        <SubmitButton>
          <SubmitText>Create accountant</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  )
}
