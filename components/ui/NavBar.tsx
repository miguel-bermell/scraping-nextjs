import { Button, Spacer, Text, useTheme } from "@nextui-org/react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

export const NavBar = () => {

  const router = useRouter()
  const { theme } = useTheme()

  const handleClick = () => {
    router.reload()
  }

  return (
    <div style={
      {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 20px',
        backgroundColor: theme?.colors.gray900.value
      }
    }>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono"
        width={70}
        height={70}
      />
      
      <Text color="white" h2>P</Text>
      <Text color="white" h3>roductos</Text>

      <Spacer style={{ flex: 1 }} />
    
      <Button onClick={handleClick} auto color="gradient" rounded bordered>
        Refrescar
      </Button>
    </div>
  )
}