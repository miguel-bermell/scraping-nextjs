import { Grid, Card, Text } from "@nextui-org/react"
import { Props } from "next/script"
import { FC, PropsWithChildren } from "react"
import { MainLayout } from "../layouts"

export const GridComponent: FC<PropsWithChildren<unknown>> = ({ children }) => {

  return (
    <Grid.Container gap={2} justify="center">
      {children}
    </Grid.Container>
  )
}