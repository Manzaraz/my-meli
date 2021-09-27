import { Caja, Card, Container, Link, LocationIcon, PlatinumIcon, Reputation, Row, Title } from "./styles";



export const InfoSeller = () => {
    return (
        <Container>
            <Title>
                Información del Vendedor
            </Title>
            <Card>
                <LocationIcon/> 
                <div>
                    <p>Ubicación</p>
                    <strong>San Miguel de Tucumán, Tucumán</strong>
                </div>
            </Card>
            <Card>
                <PlatinumIcon/> 
                <div>
                    <p className="platinum" >MercadoLider Platinum</p>
                    <strong>¡Es uno de los mejores del sitio!</strong>
                </div>
            </Card>
            <Reputation>
                <Caja>
                    <li/>
                    <li/>
                    <li/>
                    <li className="active" />
                </Caja>
            </Reputation>
            <Row>
                <div>
                    <strong>2293</strong>
                    <span>Ventas en los últimos 60 días</span>
                </div>
                <div>
                    <strong>💬</strong>
                    <span>Brinda buena atención</span>
                </div>
                <div>
                    <strong>⏱</strong>
                    <span>Despacha sus productos a tiempo</span>
                </div>
            </Row>
            <Link href="#">Ver más datos del este vendedor</Link>
        </Container>
    )
}



// const LocationIcon = () => {
//     return (
//         <h3>🗺</h3>
//     )
// }
// const PlatinumIcon = () => {
//     return (
//         <h1>🏅</h1>
//     )
// }
    