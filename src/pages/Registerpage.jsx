import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../Context/AuthContext'

export default function Registerpage() {

  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [isSubmitting,setSubmitting]= useState(false);

  const toast = useToast()
  const {register,signInWithGoogle,signInWithFacebook} =useAuth()

const [name,setName] =useState("")
  const history = useHistory()

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Register
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
       
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            // your register logic here
            if(!email || !password){
              toast({
                description:"Fullfill the all date",
                isClosable:true,
                status:"error",
                duration: 5000
              })
            }else{
              setEmail("")
              setPassword("")
            }
            setSubmitting(true);
            register(email,password)
            
            .then((res)=>
           
            toast({
              description:"Successfully Register",
              isClosable:true,
              status:"success",
              duration: 2000
            })
            )
            .catch((error)=>
              toast({
                description:error.message,
                isClosable:true,
                status:"error",
                duration: 5000
              })
            ).finally(()=> setSubmitting(false))

          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} name='email' type='email' autoComplete='email' required />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                name='password'
                type='password'
                autoComplete='password'
                required
              />
            </FormControl>
            <Button isLoading={isSubmitting} type='submit' colorScheme='primary' size='lg' fontSize='md'>
              Sign up
            </Button>
          </Stack>
        </chakra.form>
        <Center my={4}>
          <Button variant='link' onClick={() => history.push('/login')}>
            Login
          </Button>
        </Center>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant='outline'
          isFullWidth
          colorScheme='red'
          leftIcon={<FaGoogle />}
          onClick={() => signInWithGoogle()
            .then((res)=>{
              console.log(res)
              setName(res.user)
            }
            )
            .catch(er=>console.log(er))
          }
        >
          Sign in with Google
        
        </Button>
  
        <Button
          variant='outline'
          isFullWidth
          colorScheme='red'

          onClick={() => signInWithFacebook()
            .then((res)=>console.log(res))
            .catch(er=>console.log(er))
          }
        >
          Sign in with Facebook
          
        </Button>

      </Card>
    </Layout>
  )
}
