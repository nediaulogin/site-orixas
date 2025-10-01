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
                transition-transform hover:scale-110 group"
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
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-gray-900 text-white text-center p-10 rounded-full shadow-lg max-w-md">
          <p className="text-sm ">
            No princípio, só existia <strong>Olodumaré</strong>, o Ser Supremo, que criou tudo. 
            O universo era um grande vazio até que Olodumaré decidiu criar dois reinos distintos: 
            <strong> Orun</strong>, o mundo espiritual, e <strong>Aiê</strong>, o mundo material. 
            Ele confiou a criação do Aiê a <strong>Obatalá (Oxalá)</strong>, que espalhou a terra sobre as águas primordiais, 
            dando forma ao mundo físico. Assim, a separação entre Orun e Aiê foi estabelecida, 
            conectando ambos através do <strong>axé</strong>, a força vital.
          </p>
        </div>
      </div>
    </div>
  );
}
