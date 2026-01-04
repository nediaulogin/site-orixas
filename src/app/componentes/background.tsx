import Image from "next/image";

export default function Background() {
  return (
    <Image
      src="https://i.pinimg.com/736x/ab/c7/ec/abc7ecaa4f70649ab681517c95107d35.jpg" // Caminho da sua imagem
      alt="Background"
      fill
      className="absolute -z-10 object-bottom"
      style={{ opacity: 0.9 }}
    />)
}