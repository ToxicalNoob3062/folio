import { prisma } from "../../../extras/prisma";

export async function GET() {
  try {
    const experiences = await prisma.experience.findMany();
    return new Response(JSON.stringify(experiences), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Failed to fetch experiences" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
