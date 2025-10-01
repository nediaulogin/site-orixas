import Image from "next/image";

export default function Background() {
  return (
  <Image
    src="https://i.pinimg.com/736x/32/92/c2/3292c2d9c695a0350378277336c0d08e.jpg" // Caminho da sua imagem
    alt="Background"
    fill
    className="absolute -z-10"
    style={{ opacity: 0.9 }}
  />)
}