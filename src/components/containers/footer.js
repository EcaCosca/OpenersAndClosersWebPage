import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>SOBRE NOSOTROS</Footer.Title>
                    <Footer.Link href="#">NUESTRA HISTORIA</Footer.Link>
                    <Footer.Link href="#">MISION, VALORES Y VISION</Footer.Link>
                    <Footer.Link href="#">MEMORIA CORPORATIVA</Footer.Link>
                    <Footer.Link href="#">RESPONSABILIDAD SOCIAL CORPORATIVA</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>PRODUCTOS</Footer.Title>
                    <Footer.Link href="#">CERRADEROS ELECTRONICOS</Footer.Link>
                    <Footer.Link href="#">CERRADEROS ELECTRICOS</Footer.Link>
                    <Footer.Link href="#">CERRADURAS ELECTROMAGNETICAS</Footer.Link>
                    <Footer.Link href="#">CERRADURAS DE SEGURIDAD</Footer.Link>
                    <Footer.Link href="#">ACCESORIOS</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>SERVICIOS</Footer.Title>
                    <Footer.Link href="#">CONSULTORIA TECNICA</Footer.Link>
                    <Footer.Link href="#">ATENCION AL CLIENTE</Footer.Link>
                    <Footer.Link href="#">FORMACION DE PRODUCTO</Footer.Link>
                    <Footer.Link href="#">CALENDARIO DE EVENTOS</Footer.Link>
                    <Footer.Link href="#">DESCARGAS</Footer.Link>
                </Footer.Column>
                <Footer.Column> 
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}