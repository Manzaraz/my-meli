import { Card, Container, HeartIcon, Link, LocationIcon, PlatinumIcon, Price, Rating,  ReturnsIcon, Row, ShipIcon, Shipping, StarIcon, SupportIcon, Title as span, BuyBox, MainActions, TrophyIcon, SafeIcon } from "./styles";



export const ProductSeller = () => {
    return (
        <Container>
            <span className="condition">Nuevo | 12 vendidos </span>
            <Row>
                <h1>Notebook Macbook Pro 13 M1 Chip 512gb Ssd Gris Full Hd</h1>
                <HeartIcon/>
            </Row>
            <Rating>
                <span>
                    <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                </span>
                <span>151 opiniones</span>
            </Rating>
            <Price>
                <span className="price-title" >$ 174.277</span>
                <span className="price-part" > en 12 cuotas de $ 24.713,93</span>
                <Link href="#">Ver los medios de pago</Link>
            </Price>
            <Shipping>
                <figure>
                    <ShipIcon/>
                </figure>
                <span>
                    <p className="green">Llega gratis <strong>hoy</strong></p>
                    <p >Solo en CABA y zonas de GBA</p>
                    <p >Comprando dentro de las próximas <strong>2 h 24 min</strong></p>
                    <p >Beneficio Mercado Puntos</p>
                    <p><Link href="#">Ver más formas de entrega</Link></p>
                </span>
            </Shipping>
            <Shipping>
                <figure>
                    <ReturnsIcon/>
                </figure>
                <span>
                    <p className="green">Devolución gratis</p>
                    <p >Tenes 30 días desde que lo recibís</p>
                    <p><Link href="#">Conocer más</Link></p>
                </span>
            </Shipping>

            <BuyBox className="variations">
                <article>
                    <p>Color: <strong>Space Gray</strong></p>
                </article>
            </BuyBox>
            <BuyBox className="quantity">
                <article>
                    <p><strong>¡Última disponible!</strong></p>
                </article>
            </BuyBox>
            <MainActions>
                <form   method="get">
                    <input className="action-btn buy" type="submit" value="Comprar ahora" />
                    <input className="action-btn add" type="submit" value="Agregar al carrito" />
                </form>
                <article>
                    <figure>
                        <SafeIcon/>
                    </figure>
                    <span><Link>Compra Protegida</Link>, recibí el producto que esperabas o te devolvemos tu dinero</span>
                </article>
                <article>
                    <figure>
                        <TrophyIcon/>
                    </figure>
                    <span><Link>Mercado Puntos</Link>. Sumás 2999 puntos</span>
                </article>
                
            </MainActions>
        </Container>
    )
}




    