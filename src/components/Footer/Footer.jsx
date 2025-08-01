import { Container, Navbar } from "react-bootstrap";

export default function Footer() {
    return (
        <footer>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Controle de Estoque</Navbar.Brand>
                </Container>
            </Navbar>
        </footer>
    );
}