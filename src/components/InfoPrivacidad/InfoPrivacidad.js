import React, {useState} from 'react'
import { PrivContainer, PrivWrapper } from './InfoPrivacidadElements'

const InfoPrivacidad = () => {
    const [toggle, setToggle] = useState(false);

    const toggler = (dif) => {
        if (toggle.id === dif) {
        toggle ? setToggle(false) : setToggle(true);
    } else {
        console.log("dammit")
    }
    }
    return (
        <PrivContainer>
            <PrivWrapper>
                <div key="2" onClick={toggler(2)} id="2">
                {
                    toggle?
                        <>
                            <h2>DERECHOS DE PROPIEDAD INTELECTUAL</h2>
                            <p>Queda prohibida cualquier reproducción, distribución, cesión a terceros, comunicación pública y transformación sin la autorización previa y expresa de <b>Openers&Closers S.L.</b> Se prohíbe la divulgación, utilización, transmisión, distribución, reproducción y transformación, total o parcial, en cualquier soporte o medio, de los contenidos de este website (incluyendo textos, datos, gráficos, sonidos, vídeos, logotipos), sin el previo y expreso consentimiento de <b>Openers&Closers S.L</b> salvo que se indique lo contrario o su uso sea a título personal y no vulnere los derechos reconocidos a la empresa por la legislación vigente.</p>
                        </>
                        :
                        <h2>DERECHOS DE PROPIEDAD INTELECTUAL</h2>
                }
                </div>
                <div key="3" onClick={()=>setToggle(!toggle)} id="3">
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
                <div key="4" onClick={()=>setToggle(!toggle)} id="4">
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
            </PrivWrapper>
        </PrivContainer>
    )
}

export default InfoPrivacidad
