import { prisma } from "../../../extras/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return new Response(JSON.stringify(projects), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
