import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

export default function Lista({ lista, usuario }) {
    const navigate = useNavigate();

  if (!usuario.id) {
    navigate("/login");
  }

    const colunas = [
        {
            name: 'Nome',
            selector: row => row.nome,
        },
        {
            name: 'Descricao',
            selector: row => row.descricao,
        },
        {
            name: 'Preco',
            selector: row => `R$ ${row.preco?row.preco:""}`,
        },
    ];

    const opcoes = { rowsPerPageText: 'Linhas por página:', rangeSeparatorText: 'de' };

    return (
        <DataTable
        columns={colunas}
        data={lista}
        pagination
        paginationPerPage={4}
        dense
        responsive
        striped
        paginationComponentOptions={opcoes}
        noDataComponent="Cadastro Vazio"
        />
    );
}
