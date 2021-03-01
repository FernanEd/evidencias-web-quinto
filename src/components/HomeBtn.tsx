import { Link } from '@reach/router';

function HomeBtn() {
  return (
    <Link to="/evidencias-web-quinto">
      <button className="absolute left-2 top-2 rounded-xl shadow-xl py-2 px-4 bg-white hover:bg-blue-300 cursor-pointer">
        Volver
      </button>
    </Link>
  );
}

export default HomeBtn;
