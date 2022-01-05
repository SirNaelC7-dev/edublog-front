import {Box, Text} from '@chakra-ui/react'

export default function Aviso(){
    return(
        <Box
        align='center'
        lineHeight='400px'
        >
            <Text
            color='#00ff00'
            fontFamily='Ubuntu Condensed'>
                Se redirecione para a página de login ou registro
            </Text>
        </Box>
    )
}