import prisma from "./prisma";
export const getAllfarm = async () => {
  const item = await prisma.farm.findMany({
    include: {
      items: {
        select: {
          id: true,
          name: true,
          quantite: true,
        },
      },
    },
  });
  return item;
};
