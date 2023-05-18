import { AiFillCar } from 'react-icons/ai';
import { GiHabitatDome } from 'react-icons/gi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiMessage3Fill } from 'react-icons/ri';
import { BiHotel } from 'react-icons/bi';
import "./Footer.scss";
import { array } from '../../Data/data.js';


function Footer() {
  const iconos = [AiFillCar,GiHabitatDome,BsFillPeopleFill,BiHotel, RiMessage3Fill];

  return (
    <div className="card">
      <p>Servicios Disponibles</p>
      <section>
        <div className="iconos">
          {iconos.map((Icono, index) => (
            <div key={index} >
              <figure className="element">
                <Icono />
              </figure>
              <h5 className="card-title">{array[index].nombre}</h5>
              <p className="card-text">{array[index].mensaje}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Footer;
 
