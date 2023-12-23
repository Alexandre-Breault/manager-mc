import { sql } from "@vercel/postgres";
export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {}
export async function POST(request: Request) {
    const {row} = await sql `INSERT INTO `
}
