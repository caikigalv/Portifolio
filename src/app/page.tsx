"use client" 
import { Headers } from "@/components/Headers";
import { Main, Second, Second2 } from "@/components/Main";
import {Footer} from "@/components/Footer"
  

const Page = () =>{
  return(
    <div className="overflow-x-hidden ">
        <Headers/>
        <Main
          title = 'Seja Bem-vindo(a)!'
          text = 'Meu nome é Caiki, tenho 23 anos e sou um entusiasta estudante de programação Dedico-me continuamente à busca do conhecimento ,sempre empenhado em aprender e evoluir. Meu objetivo é conquistar minha primeira oportunidade na área de front-end, onde pretendo aplicar e aprimorar minhas habilidades de desenvolvimento web'
          photo ='./perfil.jpg'
        />
        <Second/>
        <Second2/>
        <Footer/>
    </div>
  )
}

export default Page;


