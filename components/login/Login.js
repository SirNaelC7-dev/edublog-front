import {Link, Text, Flex, FormControl, FormLabel, Input, Button, Box} from '@chakra-ui/react'
import {EmailIcon, LockIcon} from '@chakra-ui/icons'

export default function Login(){
    return(
        <Box
        bg='#2d312a'
        borderRadius='20px'
        margin='30px'
        justifyContent='center'>
            <Flex
            margin='10px'
            color='#2d312a'
            flexDirection='column'>
                <FormControl
                width='100%'
                justifyContent='center'
                color='#ffffff'>
                    <FormLabel htmlFor='email' placeholder='<EmailIcon>'>E-mail</FormLabel>
                    <Input id='email' type='email'/>
                    <FormLabel htmlFor='password'>Senha</FormLabel>
                    <Input id='password' type='password'/>
                    
                </FormControl>
                <Text
                color='#ffffff'
                fontSize='15px'
                align='center'>
                    Não tem uma conta? <Link href='/register' border='none' color='#00ff00'>Registre-se</Link>
                </Text>
                <Button
                type='submit'
                color='#000000' 
                bgColor='#00ff00'
                width='100%'
                marginTop='0 auto'>
                    Entrar
                </Button>
            </Flex>
        </Box>
    )
}