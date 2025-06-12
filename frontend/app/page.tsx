import PictionaryGame from '../components/PictionaryGame';

const PictionaryPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-black">Pictionary Game</h1>
      <PictionaryGame />
    </main>
  );
};

export default PictionaryPage;