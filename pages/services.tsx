import { Box, Flex } from '@theme-ui/components'
import { cardData } from '../public/cardData/serviceCards'
import type { NextPage } from 'next'
import { LogoHeading } from "../components/organism/LogoHeading"
import { Cards } from '../components/atoms/cards'

const Services: NextPage = () => {
    return (
        <>
            <LogoHeading />
            <Flex marginX={[1,2,3,4,5]} paddingY={[1,1,2,3,4]} sx={{
                flexDirection: ['column', 'row'],
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {cardData.map(([ a, b ], i) => {
                    return <Cards image={a} text={b} key={i}/>
                })}
            </Flex>
        </>
    )
}

export default Services