import {Box, Text} from '@chakra-ui/react'

export default function Home(){
    return(
        <Box
        bgColor='#000000'
        align='center'
        lineHeight='400px'
        height='100vh'
        >
            <Text
            fontSize='40px'
            color='#00ff00'
            fontFamily='Ubuntu Condensed'>
                Bem-vindo à lugar nenhum!Não volte nunca mais!
            </Text>
        </Box>
    )
}