import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {}
export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);
  //   const newFarm = await prisma.farm.create({
  //     data: {
  //       name: "TestFarm",
  //     },
  //   });
}
