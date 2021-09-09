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
                <div onClick={toggler} >
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
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2>GARANTÍAS Y RESPONSABILIDADES</h2>
                            <p><b>Openers&Closers S.L</b> no garantiza el acceso continuo a los contenidos de su página Web, ni la ausencia de virus y/o demás componentes dañinos en el website o en sus servidores, ni tampoco su correcta visualización o descarga que puede verse impedida, dificultada o interrumpida por factores o circunstancias ajenas a la empresa.
                            El site ni <b>Openers&Closers S.L</b> no se responsabiliza de posibles daños o perjuicios producidos por interferencias, interrupciones o desconexiones en el sistema que sean ajenos a su control ni tampoco de posibles daños causados en el sistema informático del usuario (hardware y software) como consecuencia del acceso a la website. Por tanto, el acceso a nuestra página Web y la navegación por la misma se hace bajo la responsabilidad del usuario.
                            <b>Openers&Closers S.L</b> no asume ningún tipo de responsabilidad por los contenidos de los enlaces de terceros a los que se haga referencia en la Web</p>
                        </>
                        :
                        <h2>GARANTÍAS Y RESPONSABILIDADES</h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2>DURACIÓN Y MODIFICACIÓN</h2>
                            <p><b>Openers&Closers S.L</b>  se reserva el derecho a modificar y/o actualizar los términos y condiciones establecidos en esta Web así como sus contenidos. De manera que la vigencia temporal de estas condiciones quedará limitada al tiempo de su exposición.</p>
                        </>
                        :
                        <h2>DURACIÓN Y MODIFICACIÓN</h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2>JURISDICCIÓN APLICABLE</h2>
                            <p>Cualquier controversia o reclamo que surja que esté relacionada con las condiciones de uso, <b>Openers&Closers S.L</b> y el usuario, con renuncia expresa a cualquier otro fuero, se someten al de los juzgados y tribunales del domicilio del usuario. En el caso de que el usuario tenga su domicilio fuera de España, <b>Openers&Closers S.L</b> y el usuario se someten, con renuncia expresa a cualquier otro fuero, a los juzgados de la ciudad de Barcelona (España). Si alguna disposición de estas condiciones de uso es declarada ilegal, nula o inaplicable por un tribunal, las disposiciones restantes permanecerán en pleno vigor y efecto.</p>
                        </>
                        :
                        <h2>JURISDICCIÓN APLICABLE</h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2>COOKIES</h2>
                            <p>El acceso a este sitio puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada usuario para que el servidor recuerde cierta información que posteriormente pueda utilizar. Esta información permite identificarle a usted como un usuario concreto y permite guardar sus preferencias personales, así como información técnica como puedan ser visitas o páginas concretas que visite. Aquellos usuarios que no deseen recibir cookies o quieran ser informados antes de que se almacenen en su ordenador, pueden configurar su navegador a tal efecto.</p>
                        </>
                        :
                        <h2>COOKIES</h2>
                }
                </div>
                <div onClick={toggler} >
                {
                    toggle?
                        <>
                            <h2>POLÍTICA DE PRIVACIDAD - RGPD</h2>
                            <p>Cualquier controversia o reclamo que surja que esté relacionada con las condiciones de uso, <b>Openers&Closers S.L</b> y el usuario, con renuncia expresa a cualquier otro fuero, se someten al de los juzgados y tribunales del domicilio del usuario. En el caso de que el usuario tenga su domicilio fuera de España, <b>Openers&Closers S.L</b> y el usuario se someten, con renuncia expresa a cualquier otro fuero, a los juzgados de la ciudad de Barcelona (España). Si alguna disposición de estas condiciones de uso es declarada ilegal, nula o inaplicable por un tribunal, las disposiciones restantes permanecerán en pleno vigor y efecto.</p>
                        </>
                        :
                        <h2>POLÍTICA DE PRIVACIDAD - RGPD</h2>
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
