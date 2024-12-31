import { prisma } from "../../../extras/prisma";

export async function GET() {
  try {
    const gallery = await prisma.gallery.findMany();
    return new Response(JSON.stringify(gallery), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch gallery" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
