import { Table } from 'react-bootstrap'

export default function TableProd(props) {

    let { products } = props

    return (
        <Table hover className="mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                </tr>
            </thead>
            {products.map((prod, index) => (
                <tbody key={index}>
                    <tr>
                        <td>{prod.id}</td>
                        <td>{prod.nome}</td>
                        <td>{prod.quantidade}</td>
                        <td>R$ {prod.preco}</td>
                    </tr>
                </tbody>
            ))}
        </Table>
    )
}