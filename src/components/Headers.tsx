
import { IoRocket } from "react-icons/io5";
import{Second2}from"@/components/Main"   
import{Footer} from"@/components/Footer"   
export const Headers = () => {

    const Menu =[
        {id:1, nome:'Meus Projetos', link:'#projetos'},
        {id:2, nome:'Contato', link:'#contato'}
    ];


    return (
        <div className="w-screen bg-slate-950 h-[50px]">
            <div className="flex justify-around items-center">
                <h1 className="text-white font-bold md:text-[30px] text-[17px] flex items-center uppercase hover:text-purple-600 cursor-pointer  h-[50px] "><a href="https://portifolio-xi-blush.vercel.app/">Portfólio</a> <IoRocket className="md:animate-spin"/></h1> 
                
                <div>
                    <ul className="flex justify-center items-center md:gap-10  gap-4">
                        {Menu.map((item)=>(
                            <div key={item.id}>
                                <li className="text-white uppercase md:text-[15px] text-[10px] font-bold cursor-pointer hover:text-purple-600 border-b-purple-600 hover:border-b"><a href={item.link}>{item.nome}</a></li>
                            </div>
                        ))};
                    </ul>
                </div>
            </div>
        </div>
    );
}