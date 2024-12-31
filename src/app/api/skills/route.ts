import { prisma } from "../../../extras/prisma";

export async function GET() {
  try {
    const skills = await prisma.skill.findMany();
    return new Response(JSON.stringify(skills), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Failed to fetch skills:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch skills" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
