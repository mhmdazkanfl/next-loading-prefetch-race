import { connection } from "next/server";

export default async function SlowPage() {
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return <h1>Slow page</h1>;
}
