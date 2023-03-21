import { usuarios } from "../../data/usuarios";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export function Perfil(){

    let params = useParams();
    let id = params.id;

    let usuario  = usuarios.find(u => u.id === parseInt(id));

    return(
        <div className="perfil">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button variant="dark">Voltar</Button>
            </div>
    )
}