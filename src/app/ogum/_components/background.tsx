import Image from "next/image";

export default function Background() {
  return (
  <Image
    src="https://i.pinimg.com/736x/58/ef/fa/58effa696fefac3e74e45332b7bd6f1d.jpg" // Caminho da sua imagem
    alt="Background"
    fill
    className="absolute -z-10"
    style={{ opacity: 0.9 }}
  />)
}