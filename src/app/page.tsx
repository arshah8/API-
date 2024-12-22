import Link from "next/link";

export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos");
  const response = await url.json();

  return (
    <main className="min-h-screen bg-green-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-green-700 mb-6 animate-pulse">
        User Todos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {response.map((dataa: any) => (
          <div
            key={dataa.id}
            className="bg-white shadow-lg rounded-lg border border-green-300 p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-lg font-semibold text-green-600">
              User ID: <span className="text-red-400">{dataa.userId}</span>
            </h2>
            <p className="text-gray-700">
              Todo:{" "}
              <span className="font-medium text-green-600">{dataa.title}</span>
            </p>
            <Link
              href={`${dataa.id}`}
              className="mt-4 inline-block text-sm font-semibold text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full" >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
