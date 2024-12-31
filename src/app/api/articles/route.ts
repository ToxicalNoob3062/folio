import { prisma } from "../../../extras/prisma";

export async function GET() {
  try {
    const articles = await prisma.article.findMany();
    return new Response(JSON.stringify(articles), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch articles" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
