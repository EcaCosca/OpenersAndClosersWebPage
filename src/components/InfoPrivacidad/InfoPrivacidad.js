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
                            <h2>COOKIES DE TERCEROS</h2>
                            <p>La Web de <b>Openers&Closers</b> puede utilizar servicios de terceros que, por cuenta de <b>Openers&Closers</b>, recopilaran información con fines estadísticos, de uso del Site por parte del usuario y para la prestación de otros servicios relacionados con la actividad del Website y otros servicios de Internet.</p>
                            <ul>
                                <li><b>Google Analytics:</b>En particular, este sitio Web utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc. con domicilio en los Estados Unidos con sede central en 1600 Amphitheatre Parkway, Mountain View, California 94043.  Para la prestación de estos servicios, estos utilizan cookies que recopilan la información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Google en los términos fijados en la Web de Google. Incluyendo la posible transmisión de dicha información a terceros por razones de exigencia legal o cuando dichos terceros procesen la información por cuenta de Google.</li>
                                <li><b>Youtube:</b> Un servicio prestado por Google utiliza cookies que recopilan la información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Googleen los términos fijados en la Web de Google. Incluyendo la posible transmisión de dicha información a terceros por razones de exigencia legal o cuando dichos terceros procesen la información por cuenta de Google.</li>
                                <li><b>WordPres:</b> Cada plugin del CMS WordPress utiliza sus propias cookies, sin estos plugins el site no funcionaría en toda su plenitud.</li>
                                <li><b>Redes sociales:</b> Cada red social utiliza sus propias cookies para que usted pueda pinchar en botones del tipo Me gusta o Compartir.</li>
                            </ul>
                        </>
                        :
                        <h2>COOKIES DE TERCEROS</h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2>COOKIES PROPIAS</h2>
                            <p><b>El usuario acepta expresamente, por la utilización de este Site, el tratamiento de la información recabada en la forma y con los fines anteriormente mencionados.</b> Y asimismo reconoce conocer la posibilidad de rechazar el tratamiento de tales datos o información rechazando el uso de Cookies mediante la selección de la configuración apropiada a tal fin en su navegador. Si bien esta opción de bloqueo de Cookies en su navegador puede no permitirle el uso pleno de todas las funcionalidades del Website.</p>
                        </>
                        :
                        <h2>COOKIES PROPIAS</h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2>INFORMACIÓN ADICIONAL</h2>
                            <p><b>En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web.</b> Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p>
                            <ul>
                                <li>Chrome</li>
                                <li>Explorer</li>
                                <li>Firefox</li>
                                <li>Ssafari</li>
                            </ul>
                            <p>Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.</p>
                            <p>Los navegadores web son las herramientas encargadas de almacenar las cookies y desde este lugar debe efectuar su derecho a eliminación o desactivación de las mismas. Ni esta web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores.</p>
                            <p>En algunos casos es necesario instalar cookies para que el navegador no olvide su decisión de no aceptación de las mismas.</p>
                        </>
                        :
                        <h2>INFORMACIÓN ADICIONAL</h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2>CONTACTO</h2>
                            <p>Si tiene dudas sobre la política de cookies, puede contactar con Webmaster en info@openers-closers.com, también mediante teléfono +34 93 408 05 15 y fax +34 93 408 40 38</p>
                            <p>OPENERS & CLOSERS S.L

                            Calle Agricultura 17, (nave 12)

                            08980 Sant Feliu de Llobregat

                            Barcelona – España</p>
                        </>
                        :
                        <h2>CONTACTO</h2>
                }
                </div>
            </PrivWrapper>
        </PrivContainer>
    )
}

export default InfoPrivacidad
