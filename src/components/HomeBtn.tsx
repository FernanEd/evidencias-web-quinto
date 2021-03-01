import { Link } from '@reach/router';

function HomeBtn() {
  return (
    <Link to="/evidencias-web-quinto">
      <button className="absolute left-2 top-2 rounded-xl shadow-xl py-2 px-4 bg-white hover:bg-blue-600 hover:text-white cursor-pointer">
        Volver a inicio
      </button>
    </Link>
  );
}

export default HomeBtn;
