import { PrismaClient, Prisma } from "@/generated/prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.filmesCreateInput[] = [
    {image: '/img/f-emalta-1.jpeg', numero: "/1.png"},
    {image: '/img/f-emalta-4.jpeg', numero: "/4.png"},
    {image: '/img/f-emalta-2.jpeg', numero: "/2.png"},
    {image: '/img/f-emalta-3.jpeg', numero: "/3.png"},
    {image: '/img/f-emalta-5.jpeg', numero: "/5.png"},
];

export async function main() {
  for (const u of userData) {
    await prisma.filmes.create({ data: u });
  }
}

main();