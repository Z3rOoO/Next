import Image from "next/image";
import styles from "./page.module.css";
import UserCard from "@/components/UserCard";

export default function Home() {

  const listaUsuario = [
    {
      nome: "Adamastor Silva",
      idade: 87,
      profissao: "Professor",
      endereco: "rua são pedro",
      resumo: "proficional chato",
      foto: "/usuario1.jpg"
    }, {
      nome: "Adamastor Silva",
      idade: 87,
      profissao: "Professor",
      endereco: "rua são pedro",
      resumo: "proficional chato",
      foto: "/usuario2.jpg"
    }, {
      nome: "Silva Santos",
      idade: 87,
      profissao: "Professor",
      endereco: "rua são pedro",
      resumo: "proficional chato",
      foto: "/usuario3.jpg"
    },
  ]

  return (
    <>
      {/* // <UserCard key={usuario.id}
    //   nome={usuario.nome}
    //   idade={usuario.idade}
    //   endereco={usuario.endereco}
    //   profissao={usuario.profissao}
    //   resumo={usuario.resumo}
    // /> */}

      <h1>listagem de usuarios</h1>
      <p>Tela destinada a listar todos os usuários da aplicação</p>

      <div className="d-flex justify-content-center align-items-scretch gap-4 box-shadow">
        {
          listaUsuario.map((usuario, index) => {
            return (
              <UserCard key={index}
                usuario={usuario}
              />)
          })
        }</div>
    </>
  )
}
