import Link from "next/link"

export default function Card({ historia }: any) {
    return (
        <div 
            className='
                border-2 border-blue-600 
                p-4 rounded-md 
                bg-gray-900/80 backdrop-blur-md 
                flex flex-col items-center mt-4
                shadow-md 
                transform transition duration-300 
                hover:scale-105 hover:shadow-xl
            '
        >
            <p className="
                font-bold my-2 text-white 
                bg-blue-800/90 rounded-md px-2
                flex justify-center
            ">
                #{historia.id}
            </p>

            <h3 className="
                font-bold my-2 text-white 
                text-2xl capitalize
            ">
                {historia.titulo}
            </h3>

            <Link 
                href={`/ogum/${historia.id}`} 
                className="
                    mt-auto bg-blue-600 text-white 
                    px-4 py-2 rounded-md 
                    hover:bg-blue-700 transition-colors
                "
            >
                Ler História
            </Link>
        </div>
    )
}
