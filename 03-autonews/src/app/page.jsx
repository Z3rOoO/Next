import Image from "next/image";
import styles from "./page.module.css";
import CardNoticias from "@/components/CardNoticias";
import Carrossel from "@/components/Carrossel";


const noticiasCarrossel = [
  {
    titulo: "titulo 1",
    resumo: "resumo 1",
    capa: "/noticia1.jpg"
  }, {
    titulo: "titulo 2",
    resumo: "resumo 2",
    capa: "/noticia2.jpg"
  }, {
    titulo: "titulo 3",
    resumo: "resumo 3",
    capa: "/noticia3.jpg"
  }, {
    titulo: "titulo 4",
    resumo: "resumo 4",
    capa: "/noticia4.jpg"
  },
]

const noticias = [
  {
    titulo: "materia 1",
    resumo: "resumo 1",
    tipo: "urgente",
    capa: "/noticia1.jpg"
  },
  {
    titulo: "materia 2",
    resumo: "resumo 2",
    tipo: "urgente",
    capa: "/noticia2.jpg"
  },
  {
    titulo: "materia 3",
    resumo: "resumo 3",
    tipo: "urgente",
    capa: "/noticia3.jpg"
  },
  {
    titulo: "materia 4",
    resumo: "resumo 4",
    tipo: "urgente",
    capa: "/noticia4.jpg"
  },
  {
    titulo: "materia 5",
    resumo: "resumo 5",
    tipo: "financas",
    capa: "/noticia5.jpg"
  },
   {
    titulo: "materia 6",
    resumo: "resumo 6",
    tipo: "financas",
    capa: "/noticia6.jpg"
  },
  {
    titulo: "materia 7",
    resumo: "resumo 7",
    tipo: "financas",
    capa: "/noticia7.jpg"
  },
  {
    titulo: "materia 8",
    resumo: "resumo 8",
    tipo: "financas",
    capa: "/noticia8.jpg"
  },
  {
    titulo: "materia 9",
    resumo: "resumo 9",
    tipo: "comuns",
    capa: "/noticia9.jpg"
  },
  {
    titulo: "materia 10",
    resumo: "resumo 10",
    tipo: "comuns",
    capa: "/noticia10.jpg"
  },
  {
    titulo: "materia 11",
    resumo: "resumo 11",
    tipo: "comuns",
    capa: "/noticia11.jpg"
  },{
    titulo: "materia 12",
    resumo: "resumo 12",
    tipo: "comuns",
    capa: "/noticia12.jpg"
  }


]


export default function Home() {
  return (
    <>
      <div className="container">


        <Carrossel data={noticiasCarrossel} />

        <div className="d-flex justify-content-center ilign-items-center gap-4 mt-5 row">
          {
            noticias.map((data, idx) => {
              return (
                <CardNoticias key={idx}
                  data={data}
                />
              )
            })
          }
        </div>
      </div>

    </>
  );
}
