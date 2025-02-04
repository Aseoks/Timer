import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-800 text-white h-screen w-64">
      <div className="py-4 px-6">
        <h2 className="text-2xl font-bold">TaskTimer</h2>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Timer
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Graph
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidenav;
