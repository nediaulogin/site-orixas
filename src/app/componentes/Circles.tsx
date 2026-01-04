import Image from "next/image";
import Link from "next/link";

export default function Circles() {
  const circles = [
    { href: "/ogum", imgSrc: "/images/Ogum.jpg", alt: "Ogum" },
    { href: "/page2", imgSrc: "/images/Oxum.jpg", alt: "Oxum" },
    { href: "/page3", imgSrc: "/images/Exu.jpg", alt: "Exu" },
    { href: "/page4", imgSrc: "/images/Yemanjá.jpg", alt: "Yemanjá" },
    { href: "/page5", imgSrc: "/images/Ossain.jpg", alt: "Ossain" },
    { href: "/page6", imgSrc: "/images/Oxóssi.jpg", alt: "Oxóssi" },
    { href: "/page7", imgSrc: "/images/Obaluaye.jpg", alt: "Obaluaye" },
    { href: "/page8", imgSrc: "/images/Oxumaré.jpg", alt: "Oxumaré" },
    { href: "/page9", imgSrc: "/images/Nana.jpg", alt: "Nana" },
    { href: "/page10", imgSrc: "/images/Oba.jpg", alt: "Oba" },
    { href: "/page11", imgSrc: "/images/Oya.jpg", alt: "Oya" },
    { href: "/page12", imgSrc: "/images/Logunedé.jpg", alt: "Logunedé" },
    { href: "/xango", imgSrc: "/images/Xangô.jpg", alt: "Xangô" },
    { href: "/page14", imgSrc: "/images/Ibeji.jpg", alt: "Ibeji" },
    { href: "/page15", imgSrc: "/images/Iroko.jpg", alt: "Iroko" },
    { href: "/page16", imgSrc: "/images/Oxalá.jpg", alt: "Oxalá" },
  ];

  const radius = 300; // Raio da distribuição dos círculos

  return (
    <div className="flex justify-center items-center relative mt-30">
      {/* Contêiner para os círculos */}
      <div className="relative w-[600px] h-[600px]">
        {circles.map((circle, index) => {
          const angle = (index * (360 / circles.length)) * (Math.PI / 180);
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <Link key={index} href={circle.href} passHref>
              <div
                className="absolute w-28 h-28 rounded-full overflow-hidden shadow-lg 
                transition-transform hover:scale-110 group border-2 border-white"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
              >
                {/* Imagem dentro do círculo */}
                <Image
                  src={circle.imgSrc}
                  alt={circle.alt}
                  layout="fill"
                  objectFit="cover"
                />

                {/* Nome do Orixá que aparece no hover */}
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 flex items-center 
                  justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300"
                >
                  {circle.alt}
                </div>
              </div>
            </Link>
          );
        })}

        {/* Texto centralizado no círculo maior */}
        <div className="absolute left-1/2 top-1/2 transform 
          -translate-x-1/2 -translate-y-1/2
           w-64 h-64 rounded-full overflow-hidden 
          shadow-xl border-4 border-white group"
        >
          <Image
            src="https://i.pinimg.com/1200x/4e/d2/74/4ed2746a854adfe56211cf993aeda307.jpg"
            alt="Olodumaré"
            fill
            className="object-cover"
            priority
          />

        </div>
      </div>
    </div>
  );
}
