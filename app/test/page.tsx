import { getAllfarm } from "@/utils/Farm";

export default async function Home() {
  const farms = await getAllfarm();
  return (
    <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
      {farms.map((farm) => (
        <div key={farm.id}>
          <h2>{farm.name}</h2>
          {farm.items.map((item) => (
            <p key={item.name}>
              {item.name} : x{item.quantite}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
