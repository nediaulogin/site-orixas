import Image from "next/image";

export default function Background() {
  return (
  <Image
    src="https://i.pinimg.com/736x/9c/eb/ca/9cebca3899e21d5711423070efece1c2.jpg" // Caminho da sua imagem
    alt="Background"
    fill
    className="absolute -z-10"
    style={{ opacity: 0.9 }}
  />)
}