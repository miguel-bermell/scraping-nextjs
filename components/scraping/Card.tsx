import { Button, Card, Col, Image, Row, Text, Tooltip } from "@nextui-org/react"
import ImageNext from "next/image"
import { useRouter } from 'next/router'
import { FC } from "react"
import { ScrapingResults } from "../../interfaces"

interface Props {
  scrapingItem: ScrapingResults
}

export const CardComponent: FC<Props> = ({ scrapingItem: { currentPrice, image, name, desiredPrice, isAvailable, url, quality , paymentImages} }) => {

  const router = useRouter()

  const handleClick = () => {
    router.push(url)
  }

  return (
    <Card cover css={{ w: "100%" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          {isAvailable &&
            <Text size={15} weight="bold" transform="uppercase" color="red">
              ¡Precio deseado! {currentPrice} € 🤑
            </Text>
          }
          <Tooltip content={quality} color="secondary" hideArrow>
            <Text h3 css={{textGradient: '45deg, $blue500 -20%, $pink500 50%', cursor: 'pointer'}} >
              {name}
            </Text>
          </Tooltip>
        </Col>
      </Card.Header>
      <Card.Body>
        <Card.Image
          src={image}
          height={400}
          width="100%"
          alt={name}
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: "absolute",
          bgBlur: "#ffffff",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              Precio actual: <span style={{fontWeight: 'bold'}}>{currentPrice}</span> €
            </Text>
            <Text color="#000" size={12}>
              Precio deseado: <span style={{fontWeight: 'bold'}}>{desiredPrice}</span> €
              </Text>
            <div style={{display:'flex', gap: '5px'}} >
              {paymentImages?.length &&
                paymentImages.map((src, i) => (
                  <ImageNext key={i} src={src} width={30} height={20} />
                ))
              }
            </div>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button onClick={handleClick} flat auto rounded color="secondary">
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Comprar
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}