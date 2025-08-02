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
                        <td>{prod.name || prod.nome}</td>
                        <td>{prod.quantity || prod.quantidade}</td>
                        <td>R$ {prod.price || prod.preco}</td>
                    </tr>
                </tbody>
            ))}
        </Table>
    )
}