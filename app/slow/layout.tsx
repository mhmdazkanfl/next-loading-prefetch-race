import { connection } from "next/server";

// Makes the prefetch of /slow's loading state take 3 s,
// so there is time to click the link while that prefetch is in flight.
export default async function SlowLayout({ children }: { children: React.ReactNode }) {
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return children;
}
