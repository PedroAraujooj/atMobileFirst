import { Button, Container, CssBaseline } from "@mui/material";
import "./style.css";
import { login } from "../../utils/login";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "../../components/TextField";

export default function Login(props) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
    setValue,
  } = useForm();

  async function handleClick(data) {
    console.log(data);
    const email = data.email;
    const senha = data.senha;
    let usuario = login(email, senha);
    if (usuario.email) {
      props.setUsuario(usuario);
      console.log(usuario);
      console.log(props.usuario);
      console.log(props.setUsuario);
      navigate("/");
    } else {
      alert(usuario.erro);
    }
  }

  const telaLogin = (
    <div id="container">
        <div id="img">
            <img src="./../../assets/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia.jpg" alt="IMG" />
        </div>
      <div
      >
        <CssBaseline />
        <Container
          maxWidth="sm"
          sx={{
            width: "25vw",
            minWidth: "320px",
            padding: "20px",
            boxShadow: "7px 7px 21px",
            borderRadius: "7px",
          }}
        >
          <form onSubmit={handleSubmit(handleClick)}>
            <h2
              style={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "200%",
              }}
            >
              Login
            </h2>
            <br />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              {...register("email", {
                required: "Email é obrigatório",
                validate: {
                  minLength: (value) =>
                    value.length >= 5 ||
                    "Email tem que ter pelo menos 5 caracteres",
                  maxLength: (value) =>
                    value.length <= 30 || "Email só pode ter até 30 caracteres",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
            <br />
            <br />
            <TextField
              id="senha"
              label="senha"
              type="password"
              autoComplete="current-password"
              {...register("senha", {
                required: "Senha é obrigatório",
              })}
              error={!!errors.senha}
              helperText={errors.senha ? errors.senha.message : ""}
            />
            <br />
            <br />
            <Button variant="contained" size="medium" type="submit">
              Login
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );

  return telaLogin;
}
