import {Text, Box, Flex, Link, FormControl, FormLabel, Input, Button} from '@chakra-ui/react'


export default function Register(){
    return(
        <Box
        width='100%'
        bg='#2d312a'
        borderRadius='20px'
        margin='30px'
        justifyContent='center'
        fontFamily='Ubuntu Condensed'>

            <Flex
            margin='10px'
            color='#2d312a'
            flexDirection='column'>
                <Box
                width='100%'
                color='#ffffff'
                >
                    <FormControl
                    width='100%'
                    justifyContent='center'
                    color='#ffffff'
                    height='100%'
                    >
                        <FormLabel htmlFor='email'>E-mail</FormLabel>
                        <Input id='email' type='email'></Input>
                        <FormLabel htmlFor='name'>Seu Nome</FormLabel>
                        <Input id='name' type='text'></Input>
                        <FormLabel htmlFor='password'>Senha</FormLabel>
                        <Input id='password' type='password'></Input>
                        <FormLabel htmlFor='password'>Confirme sua senha</FormLabel>
                        <Input id='password' type='password'></Input>
                        
                     
                    </FormControl>
                    <Text
                    align='center'
                    fontSize='10px'
                    >
                        Ao se registrar, você aceita nossos <Link color='#00ff00'>termos de uso</Link> e a nossa <Link color='#00ff00'>política de privacidade</Link>
                    </Text>
                    <Button
                    type='submit'
                    color='#000000' 
                    bgColor='#00ff00'
                    width='100%'
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
}