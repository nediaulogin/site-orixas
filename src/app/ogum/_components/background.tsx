import Image from "next/image";

export default function Background() {
  return (
  <Image
    src="https://i.pinimg.com/736x/2a/d9/84/2ad9846f2418adc76391619c497b8339.jpg" // Caminho da sua imagem
    alt="Background"
    fill
    className="absolute -z-10"
    style={{ opacity: 0.9 }}
  />)
}