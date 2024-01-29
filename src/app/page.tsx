import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-center text-4xl">Amigo Secreto</h1>

      {/* Use Link component with passHref */}
      <Link href="/event/1" passHref>
        <button className="w-full p-3 mt-3 rounded-lg bg-blue-800 text-white text-4xl border-b-4 border-blue-600 hover:opacity-80 active:border-blue-800">
          Ir para Evento
        </button>



      </Link>
    </div>
  );
}

export default Page;