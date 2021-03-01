import HomeBtn from '../components/HomeBtn';
import './T1_4.css';

function T1_4(props: any) {
  let msg = 'Hola';

  return (
    <main className="min-h-screen bg-blue-300 flex justify-center items-center">
      <HomeBtn />
      <table>
        <thead>
          <th>Hora</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miercoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
        </thead>
        <tr>
          <td className="hora">3:00PM - 5:00PM</td>
          <td className="web">Diseño de paginas web</td>
          <td></td>
          <td className="web">Diseño de paginas web</td>
          <td></td>
          <td className="web async">Diseño de paginas web</td>
        </tr>
        <tr>
          <td className="hora">5:00PM - 7:00PM</td>
          <td className="sistemas">Desarrollo e implementación de sistemas</td>
          <td className="sistemas">Desarrollo e implementación de sistemas</td>
          <td className="sistemas">Desarrollo e implementación de sistemas</td>
          <td className="web">Diseño de paginas web</td>
          <td className="sustentabilidad">Sustentabilidad</td>
        </tr>
        <tr>
          <td className="hora">7:00PM - 9:00PM</td>
          <td className="mantenimiento async">Tecnicas de mantenimiento</td>
          <td className="mantenimiento">Tecnicas de mantenimiento</td>
          <td className="mantenimiento">Tecnicas de mantenimiento</td>
          <td className="mantenimiento">Tecnicas de mantenimiento</td>
          <td className="sistemas async">
            Desarrollo e implementación de sistemas
          </td>
        </tr>
      </table>
    </main>
  );
}

export default T1_4;
