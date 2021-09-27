import { Column, Container, Description, Galery, Panel, Section } from './styles';
import productPicture from "../../assets/AppleMacbookAir.jpg";
import { InfoSeller } from '../InfoSeller';

export const Product = () => {
    return (
        <Container>
            <Panel>
                <Column>
                    <Galery>
                           <img src={productPicture} alt="Product" />
                    </Galery>
                    <Info />
                </Column>
                <Column>
                    {/* 
                    <ProductSeller />
                    */}
                    <InfoSeller />
                    <Warranty /> 
                </Column>
            </Panel>
        </Container>
    )
}

const Info = () => {
    return (
        <Description>
            <h5>Descripción:</h5>
            <p>
                <span>La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos. Además, el Neural Engine de 16 núcleos se encarga de acelerar todos los procesos de aprendizaje automático. Todo en un diseño silencioso sin ventilador que te ofrece la mayor duración de batería en una MacBook Air: hasta 18 horas. (1) Portátil como siempre, más poderosa que nunca.</span>
                <br/><br/>
                <hr></hr>
                <span>
                    • Chip M1 de Apple que permite un gran avance en el rendimiento del CPU, GPU y aprendizaje automático.<br/>
                    • Hasta 18 horas de batería para hacer mucho más (1).<br/>
                    CPU de 8 núcleos con un rendimiento hasta 3.5 veces más rápido para que puedas hacer de todo a una velocidad insuperable (2).<br/>
                    • GPU de hasta 8 núcleos con gráficos hasta 5 veces más veloces para apps y juegos con gráficos avanzados (2).<br/>
                    • Neural Engine de 16 núcleos para un aprendizaje automático avanzado.<br/>
                    • 8 GB de memoria unificada para que todo sea más rápido y fluido.<br/>
                    • Almacenamiento SSD superrápido para abrir apps y archivos al instante.<br/>
                    • Diseño silencioso, sin ventilador.<br/>
                    • Pantalla Retina de 13.3 pulgadas con una amplia gama de colores P3 para que disfrutes imágenes vibrantes y un nivel de detalle increíble (3).<br/>
                    • Cámara FaceTime HD con procesador de señal de imagen avanzado para hacer llamadas de video claras y nítidas.<br/>
                    • Sistema de tres micrófonos que se enfocan en tu voz y no en el ruido ambiental.<br/>
                    • Wi-Fi 6 de última generación para una conectividad más rápida.<br/>
                    • Dos puertos Thunderbolt/USB 4 para cargar y conectar accesorios.<br/>
                    • Magic Keyboard retroiluminado y Touch ID para desbloquear tu MacBook Air de forma segura.<br/>
                    • macOS con un diseño impactante e intuitivo, que funciona a la perfección con tu iPhone.<br/>
                    • Disponible en color oro, color plata y gris espacial.<br/>
                </span>
                <br/><br/>
                <span>Avisos Legales
                    No todos los recursos y configuraciones están disponibles en todos los países.<br/>
                    (1) La duración de la batería varía según el uso y la configuración.<br/>
                    (2) Comparado con la generación anterior.<br/>
                    (3) El tamaño de la pantalla se mide en diagonal.
                </span>
                <br/><br/>
                <hr/>

            </p>
        </Description>
    )
}

const Warranty = () => {
    
    return (
        <Section>
            <h5>Garantía</h5>
            <article>
                <span>
                    <p className="title">
                        Compra Protegida con Mercado Pago
                    </p>
                    <p className="description">
                        Recibí el producto que esperabas o te devolvemos tu dinero
                    </p>
                </span>
                <span>
                    <p className="title">
                        Garantía del vendedor
                    </p>
                    <p className="description">
                        Garantía del vendedor: 6 meses
                    </p>
                </span>
                <a href="https://articulo.mercadolibre.com.ar/noindex/warranty/MLA927828536?new_version=true&modal=false&newIndex=true" >
                    Conocer más sobre garantía
                </a>
            </article>


        </Section>
    )
}


