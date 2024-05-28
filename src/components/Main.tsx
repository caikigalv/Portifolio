
import style from '@/components/index.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"



type Props = {
    title: string,
    text: string,
    photo: string,
};




export const Main = ({ title, text, photo }: Props) => {
    return (
        <div className={style.container}>
            <div className="lg:flex lg:justify-around items-center w-screen">
                <div className="lg:w-[600px] text-center">
                    <h1 className="md:text-[40px] text-[20px] mb-4 text-center font-bold text-white animate-pulse">{title}</h1>
                    <p className="font-semibold text-white lg:shadow-xl text-center text-[16px]">{text}</p>
                </div>
                <div className='flex justify-center '>
                    <img className="lg:w-[400px] lg:h-[400px]  w-[300px]  h-[300px] rounded-full mt-4 md:mt-0 border-8  shadow-purple-700 md:animate-pulse shadow-lg transition-shadow border-slate-950 lg:rounded-b-full lg:rounded-t-none" src={photo} alt="" />
                </div>
            </div>
        </div>
    );
}



const carrossel = [
    { id: 1, nome: 'Portfólio' },
    { id: 2, nome: 'Portfólio' },
    { id: 3, nome: 'Portfólio' },
    { id: 4, nome: 'Portfólio' },
    { id: 5, nome: 'Portfólio' },
    { id: 6, nome: 'Portfólio' },
    { id: 7, nome: 'Portfólio' },
    { id: 8, nome: 'Portfólio' },
    { id: 9, nome: 'Portfólio' },
    { id: 10, nome: 'Portfólio' },
    { id: 11, nome: 'Portfólio' },
    { id: 12, nome: 'Portfólio' },
    { id: 13, nome: 'Portfólio' },
    { id: 14, nome: 'Portfólio' },
    { id: 15, nome: 'Portfólio' },
    { id: 16, nome: 'Portfólio' },
    { id: 17, nome: 'Portfólio' },
    { id: 18, nome: 'Portfólio' },
    { id: 19, nome: 'Portfólio' },
    { id: 20, nome: 'Portfólio' },
]


export const Second = () => {
    const fade = {
        initial:{
            opacity: 0,
            y:100,
            
        },
        animate:(index:number)=>({
            opacity:1,
            y:0,
            scale:1,
            trasition:{
                delay: 0.05 * index,
            }
    
        })
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 20,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false
    };

    const Habilidades = [
        { html: 'https://static.vecteezy.com/system/resources/previews/012/697/299/original/stylized-3d-html-logo-design-free-png.png' },
        { css: 'https://static.vecteezy.com/system/resources/previews/011/665/094/non_2x/stylized-3d-css-icon-side-view-free-png.png' },
        { javascript: 'https://static.vecteezy.com/system/resources/previews/012/697/298/original/3d-javascript-logo-design-free-png.png' },
        { typescript: 'https://cdn3d.iconscout.com/3d/free/thumb/free-typescript-9294849-7577992.png?f=webp' },
        { tailwindcss: 'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png' },
        { react: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
        { git: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' }
    ];


    return (
        <div className="bg-slate-950 w-screen lg:h-[400px] flex flex-col items-center">
            <div className='w-screen lg:block hidden'>
                <div className=' gap-8 border-4 border-purple-800  border-l-transparent border-r-transparent' >
                    <Slider {...settings}>
                        {carrossel.map((index) => (
                            <div key={index.id} >
                                <div>
                                    <p className='text-purple-600'>{index.nome}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


            <h1 className='text-purple-600 md:mt-8 mt-4 uppercase font-bold text-[30px] '>Skills</h1>
            <div>

                <div className='grid md:grid-flow-col md:gap-8 justify-center items-center'>
                    {Habilidades.map((item, index) => (
                        <motion.div
                        key={index}
                        variants={fade}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once:true,
                        }}
                        custom={index}
                        >
                        <div className='mt-10 md:mb-[100px] mb-4'>
                            <img className='lg:w-[120px] w-[100px]' src={item.html} alt="" title='HTML' />
                            <img className='lg:w-[120px] w-[100px]' src={item.css} alt="" title='CSS' />
                            <img className='lg:w-[120px] w-[100px]' src={item.javascript} alt="" title='JAVASCRIPT' />
                            <img className='lg:w-[120px] w-[100px]' src={item.typescript} alt="" title='TYPESCRIPT' />
                            <img className='lg:w-[120px] w-[100px]' src={item.tailwindcss} alt="" title='TAILWINDCSS' />
                            <img className='lg:w-[120px] w-[100px]' src={item.react} alt="" title='REACT' />
                            <img className='lg:w-[120px] w-[100px]' src={item.git} alt="" title='GIT' />
                        </div>
                        </motion.div>
                    ))}


                </div>
               
            </div>
                
            <div className='w-screen lg:block hidden'>
                <div className=' gap-2 border-4 border-purple-800  border-l-transparent border-r-transparent' >
                    <Slider {...settings}>
                        {carrossel.map((index) => (
                            <div key={index.id} >
                                <div>
                                    <p className='text-purple-600'>{index.nome}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );

}




export const Second2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div id='projetos' className={style.container2}>
            <h1 className='text-purple-600 mt-10 uppercase font-bold text-[30px] '>Projetos</h1>
            <div className='w-3/4 m-auto '>
                <div className='mt-20'>
                    <Slider {...settings} >
                        {data.map((d) => (
                            <div key={d.id} className='bg-black h-[450px] text-white rounded-xl border-2 border-purple-600'>
                                <div className='rounded-t-xl flex justify-center items-center bg-purple-900'>
                                    <img className='w-full rounded-t-xl' src={d.img} alt="" />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                    <p className='text-xl font-bold '>{d.nome}</p>
                                    <p>{d.review}</p>
                                    <button className='bg-purple-900 text-white text-lg px-6 py-1 rounded-xl'><a href={d.link}>Ir ao Site</a></button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}



const data = [
    {
        id: 1,
        nome: 'Fliperama',
        img: './Fliperama.jpeg',
        review: 'Site Fliplerama foi um projeto criado na intenção de práticar minhas habilidades com HTML&CSS e JavaScript',
        link: 'https://caikigalv.github.io/Fliperama/'
    },
    {
        id: 2,
        nome: 'Starbucks',
        img: 'starbucks.jpeg',
        review: 'Site feito durante o curso de HTML&CSS da B7web',
        link: 'https://caikigalv.github.io/starbucks/'

    },
    {
        id: 3,
        nome: 'Jogo da Velha',
        img: 'Jogo da Velha.jpeg',
        review: 'Site feito durante o curso de JavaScript da B7web ',
        link: 'https://caikigalv.github.io/Jogo-da-Velha/'
    },
    {
        id: 4,
        nome: 'Relogio Analógico',
        img: 'Relogio.jpeg',
        review: 'Site feito durante o curso de JavaScript da B7web  ',
        link: 'https://caikigalv.github.io/Relogio/'
    },
    {
        id: 5,
        nome: 'DarkMod',
        img: 'Dark.jpeg',
        review: 'Site feito para praticar o javascript',
        link: 'https://caikigalv.github.io/Darkmod/'
    },
    {
        id: 6,
        nome: 'Tela Login',
        img: 'Tela login.jpeg',
        review: 'Tela de login feito para praticar tailwincss e javascript ',
        link: 'https://caikigalv.github.io/telalogin/'
    },
    {
        id: 7,
        nome: 'Medicenter',
        img: './Medicenter.jpeg',
        review: 'Site feito durante o curso de HTML&CSS da B7web',
        link: 'https://caikigalv.github.io/medicenter/'
    },
    {
        id: 8,
        nome: 'Bloco de Notas',
        img: 'Bloco De Notas.jpeg',
        review: 'Bloco de nota feito no evento da rockeseat no evento de react',
        link: 'https://caikigalv.github.io/Bloco-de-Notas/'
    },
    {
        id: 9,
        nome: 'Jogo Quiz',
        img: 'Jogo Quiz.jpeg',
        review: 'Site feito durante o curso de JavaScript da B7web ',
        link: 'https://caikigalv.github.io/Jogo-Quiz/'
    },
]


