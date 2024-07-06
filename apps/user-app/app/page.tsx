import prisma from "@repo/db/client"

export default async function Home() {

  return (
    <h1 className="text-3xl text-center">Hello user-app</h1>
  );
}
