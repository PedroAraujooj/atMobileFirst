
export function login(username, senha){
    let resposta = {};
    if(username && senha){
        resposta.email = username;
        resposta.id = 1;
    }
    else{
         resposta.erro = "Necessário senha e nome de usuario"
    }
    return resposta;
};