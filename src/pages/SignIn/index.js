import React from "react";
import {Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {Background,Container,Logo,AreaInput,Input,SubmitButton,SubmitText,Link,LinkText} from "./styles";

export default function SignIn(){
  const navigation = useNavigation()

  return(
    <Background>
     <Container
      behavior={Platform.OS === 'ios' ? 'padding':''}
      enabled
     >
       <Logo
        source={require("../../assets/Logo.png")}
       />

       <AreaInput>
         <Input
          placeholder={"Your email"}
         />
       </AreaInput>
       <AreaInput>
         <Input
           placeholder={"Your password"}
         />
       </AreaInput>
       <SubmitButton activeOpacity={0.7} >
         <SubmitText>Acessar</SubmitText>
       </SubmitButton>
       <Link onPress={()=> navigation.navigate('SignUp')}>
         <LinkText>Crie sua conta</LinkText>
       </Link>
     </Container>
    </Background>
  )
}
