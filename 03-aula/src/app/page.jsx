import Image from "next/image";
import styles from "./page.module.css";
import UserCard from "@/components/UserCard";


export default async function Home() {
  // return ({data});
  async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    console.log(data)

    return data
  }

  getStaticProps()

  data.map((users, index) => {
    return (
      <UserCard
        key={index}
        users={users} />
    )
  })
}

