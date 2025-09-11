import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-2xl md:text-3xl font-light text-gray-600 mt-4">
        Oops! Seite nicht gefunden.
      </p>
      <p className="text-gray-500 mt-2 mb-8 text-center max-w-md">
        Die Seite, die du suchst, existiert nicht oder wurde verschoben. Bitte überprüfe die URL
        oder kehre zur Startseite zurück.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Zur Startseite
      </Link>
    </div>
  );
};
export default NotFound;
