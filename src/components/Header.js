import React from 'react'
import { Link as RouterLink } from 'gatsby'
import {
  useColorMode,
  Link,
  IconButton,
  Text,
  Image,
  Box,
} from '@chakra-ui/core'
import Container from './Container'
import fishes from '../data/fishes.json'
import bugs from '../data/bugs.json'

const sample = (arr) => {
  const len = arr == null ? 0 : arr.length
  return len ? arr[Math.floor(Math.random() * len)] : undefined
}

const randomFish = sample(fishes.filter((d) => d.image))
const randomBug = sample(bugs.filter((d) => d.image))

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      as="header"
      display="flex"
      justifyContent="center"
      width="100%"
      bg={`mode.${colorMode}.headerBg`}
      borderBottom="1px solid"
      borderBottomColor={`mode.${colorMode}.headerBorder`}
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text as="h1" fontFamily="mono">
          <Link as={RouterLink} to="/" display="flex" alignItems="center">
            <Image
              src={randomFish.image}
              alt="random animal"
              height={8}
              mr={2}
            />
            AC: NH - Surf 'n' turf
            <Image
              src={randomBug.image}
              alt="random animal"
              height={8}
              ml={2}
            />
          </Link>
        </Text>

        <IconButton
          variant="ghost"
          rounded="full"
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          onClick={toggleColorMode}
        />
      </Container>
    </Box>
  )
}

export default Header
