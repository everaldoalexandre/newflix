import prisma from "@/lib/prisma";


export async function GET() {
  const filmes = await prisma.filmes.findMany();
  return Response.json({filmes})
} 
