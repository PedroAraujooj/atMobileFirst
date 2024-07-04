import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, CssBaseline } from "@mui/material";
import { addProduto } from "../../utils/lista";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";


export default function Form({ lista, setLista , usuario}) {
    const navigate = useNavigate();

  if (!usuario.id) {
    navigate("/login");
  }

    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitted },
      reset,
      setValue,
    } = useForm();
  
  
    async function submeterDados(dados) {
        addProduto(dados, lista, setLista);
    }
    return (
      <>
      <h3>Cadastro de Produtos</h3>
        <CssBaseline />
        <Container
          maxWidth="sm"
          sx={{
            width: "35vw",
            minWidth: "320px",
            padding: "20px",
            boxShadow: "7px 7px 21px",
            borderRadius: "7px",
            marginBottom: "14px",
          }}
        >
          <form onSubmit={handleSubmit(submeterDados)}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                marginBottom: "7px",
              }}
              id="nome"
              label="Nome"
              {...register("nome", {
                required: "Nome é obrigatório",
              })}
              error={!!errors.nome}
              helperText={errors.nome ? errors.nome.message : ""}
            />
            <br />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                marginBottom: "7px",
              }}
              id="descricao"
              label="descricao"
              variant="outlined"
              {...register("descricao", {
                required: "Descricao é obrigatória",
              })}
              error={!!errors.descricao}
              helperText={errors.descricao ? errors.descricao.message : ""}
            />
            <br />
            <TextField
              type = "number"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                marginBottom: "7px",
              }}
              id="preco"
              label="Preço"
              variant="outlined"
              {...register("preco", {
                required: "Preço é obrigatório",
              })}
              inputProps={{
                step: "0.01",
              }}
              error={!!errors.descricao}
              helperText={errors.descricao ? errors.descricao.message : ""}
            />
            <br />
            <Button variant="contained" size="medium" type="submit">
              Salvar
            </Button>
          </form>
        </Container>
      </>
    );
  }