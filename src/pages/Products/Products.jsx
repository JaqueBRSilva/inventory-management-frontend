import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TableProd from '../../components/TableProd/TableProd';

const list = [
    { id: 1, nome: "Notebook Dell", quantidade: 5, preco: 4500.00 },
    { id: 2, nome: "Mouse Logitech", quantidade: 20, preco: 150.00 },
    { id: 3, nome: "Teclado Mecânico", quantidade: 10, preco: 350.00 },
    { id: 4, nome: "Monitor Samsung", quantidade: 7, preco: 1200.00 },
    { id: 5, nome: "Impressora HP", quantidade: 4, preco: 980.00 },
    { id: 6, nome: "HD Externo 1TB", quantidade: 15, preco: 390.00 },
    { id: 7, nome: "Webcam Full HD", quantidade: 8, preco: 250.00 },
    { id: 8, nome: "Cadeira Gamer", quantidade: 3, preco: 1300.00 },
    { id: 9, nome: "Smartphone Xiaomi", quantidade: 12, preco: 1800.00 },
    { id: 10, nome: "Caixa de Som Bluetooth", quantidade: 9, preco: 220.00 }
]

export default function Products() {
    const [products, setProducts] = useState(list)

    return (
        <>
            <Header />
            <Container className='py-5'>
                <h1>Lista de Produtos</h1>

                {(products.length > 0) ? (

                    <TableProd
                        products={products}
                    />

                ) : (

                    <>
                        <p>Nenhum produto disponível no momento</p>
                    </>
                )}
            </Container>
            <Footer />
        </>
    )
}