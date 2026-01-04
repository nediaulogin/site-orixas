import Link from "next/link"


export default function Card({ historia }: any) {
    return (
        <div
            className='
                border-2 border-black 
                p-4 rounded-md 
                bg-fuchsia-600 backdrop-blur-md h-75 w-50
                flex flex-col items-center justify-center mt-4
                shadow-md 
                transform transition duration-300 x
                hover:scale-105 hover:shadow-fuchsia-700
            '
        >
            <p className="
                font-bold my-2 text-black 
                bg-blue-800/90 rounded-md px-2
                flex justify-center
            ">
                #{historia.id}
            </p>

            <h3 className="
                font-bold my-2 text-black flex justify-center
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
