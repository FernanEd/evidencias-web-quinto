function Footer() {
  let msg = 'Hola';

  return (
    <footer id="main-footer" className="bg-gray-800 py-4">
      <p className="text-white text-center font-bold ">
        Hecho por{' '}
        <a
          href="https://github.com/FernanEd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          Fernando Ed.
        </a>{' '}
        2020
      </p>
    </footer>
  );
}

export default Footer;
