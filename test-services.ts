import { getAllServices } from "./lib/services";

async function main() {
  const services = await getAllServices();
  console.log(
    JSON.stringify(
      services.map((s) => ({ title: s.title, image: s.image })),
      null,
      2,
    ),
  );
}

main().catch(console.error);
