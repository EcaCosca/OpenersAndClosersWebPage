import React, {useState} from 'react'
import { PrivContainer, PrivWrapper } from './InfoPrivacidadElements'

const InfoPrivacidad = () => {
    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }
    return (
        <PrivContainer>
            <PrivWrapper>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2>COOKIES QUE USA ESTE SITIO</h2>
                            <ul>
                                <li><b>Cookies técnicas: </b>Son aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales.</li>
                                <li><b>Cookies de personalización: </b>Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.</li>
                                <li><b>Cookies de análisis:</b>Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.</li>
                                <li><b>Cookies publicitarias: </b> Son aquéllas que, bien tratadas por nosotros o por terceros, nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos analizar sus hábitos de navegación en Internet y podemos mostrarle publicidad relacionada con su perfil de navegación.</li>
                                <li><b>Cookies de publicidad comportamental: </b>Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</li>
                            </ul>
                        </>
                        :
                        <h2>COOKIES QUE USA ESTE SITIO</h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2>IDEAS EQUIVOCADAS SOBRE LAS COOKIES</h2>
                            <p>Desde su introducción en Internet han circulado <b>ideas equivocadas</b> acerca de las cookies. En 2005 Jupiter Research publicó los resultados de un estudio, según el cual un importante porcentaje de entrevistados creían cierta alguna de las siguientes afirmaciones:</p>
                            <ul>
                                <li>Las cookies son similares a gusanos y virus en que pueden borrar datos de los discos duros de los usuarios.</li>
                                <li>Las cookies son un tipo de spyware porque pueden leer información personal almacenada en el ordenador de los usuarios.</li>
                                <li>Las cookies generan popups.</li>
                                <li>Las cookies se utilizan para generar spam.</li>
                                <li>Las cookies solo se utilizan con fines publicitarios.</li>
                            </ul>
                            <p>En realidad, <b>las cookies son solo datos</b>, no código, luego no pueden borrar ni leer información del ordenador de los usuarios. Sin embargo, las cookies permiten detectar las páginas visitadas por un usuario en un sitio determinado o conjunto de sitios. Esta información puede ser recopilada en un perfil de usuario. Estos perfiles son habitualmente anónimos, es decir, no contienen información personal del usuario (nombre, dirección, etc). De hecho, no pueden contenerla a menos que el propio usuario la haya comunicado a alguno de los sitios visitados. Pero aunque anónimos, estos perfiles han sido objeto de algunas preocupaciones relativas a la privacidad.</p>
                        </>
                        :
                        <h2>IDEAS EQUIVOCADAS SOBRE LAS COOKIES</h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2></h2>
                            
                        </>
                        :
                        <h2></h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2></h2>
                            
                        </>
                        :
                        <h2></h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2></h2>
                            
                        </>
                        :
                        <h2></h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2></h2>
                            
                        </>
                        :
                        <h2></h2>
                }
                </div>
            </PrivWrapper>
        </PrivContainer>
    )
}

export default InfoPrivacidad
