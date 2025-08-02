import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TableProd from '../../components/TableProd/TableProd';


const nameValid = {
    required: {
        value: true,
        message: "Preencha o nome do produto"
    },
    maxLength: {
        value: 25,
        message: "O nome do produto deve ter no máximo 25 caracteres"
    }
}

const quantityValid = {
    required: {
        value: true,
        message: "Insira uma quantidade"
    },
    min: {
        value: 1,
        message: "A quantidade tem que ser pelo menos 1"
    }
}

const priceValid = {
    required: {
        value: true,
        message: "Valor precisa ser inserido"
    },
    min: {
        value: 0.0001,
        message: "O preço não pode ser menor ou igual a 0"
    }
}

export default function Products() {
    const [products, setProducts] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(formData) {
        formData.id = products.length
        setProducts([...products, formData])
    }

    async function getProductsList() {
        const url = "https://inventory-management-api-o8x3.onrender.com/produtos"
        const response = await axios.get(url)
        setProducts(response.data)
    }

    useEffect(() => {
        getProductsList()
    }, [])

    return (
        <>
            <Header />
            <Container className="my-5">
                <h1>Produtos</h1>

                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="name">
                            <Form.Label>Nome do Produto</Form.Label>
                            <Form.Control type="text" isInvalid={!!errors.name} {...register("name", nameValid)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.name?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="quantity">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control type="number" isInvalid={!!errors.quantity} {...register("quantity", quantityValid)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.quantity?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="price">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control type="number" isInvalid={!!errors.price} {...register("price", priceValid)} />
                            <Form.Control.Feedback type="invalid" >
                                {errors.price?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit" >Cadastrar</Button>
                </Form>
            </Container>

            <Container className='py-5'>
                <h2>Lista de Produtos</h2>

                {(products.length > 0) ? (

                    <TableProd products={products} />

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