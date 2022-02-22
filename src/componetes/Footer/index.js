import { Link } from 'react-router-dom';
import image from '../img/image.png';
import face from '../img/facebook.png';
import insta from '../img/instagram.png';
import tik from '../img/tik-tok.png';
import tube from '../img/youtube.png';
import './footer.css';

export default () => {
  const itens = [
    "PERFUME INFANTIL",
    "SABONETES",
    "PÓS-BANHO",
    "ASSADURAS",
    "HIDRATANTES",
    "LENÇOS UMEDECIDOS"
  ];

  const icons = [insta, face, tube, tik];
  const links = [
    "https://www.instagram.com/foreverliss/",
    "https://www.facebook.com/foreverliss",
    "https://www.youtube.com/c/ForeverLissOficial",
    "https://www.tiktok.com/@foreverlissprofessional"
  ];

  return (
    <footer>
      <div>
        <h6>VISITE NOSSAS REDES SOCIAIS</h6>
          <div className='icons'>
            {icons.map((icon, i) => (
              <a href={links[i]}>
                <div className='circle'>
                  <img src={icon}/>
                </div>
              </a>
            ))}
          </div>
      </div>
      <navigator className='nav'>
        {itens.map(item => (
          <Link to="/home">
            <p className='p'>{item}</p>
          </Link>
        ))}
      </navigator>
      <div className='pagamento'>
        <h6>FORMAR DE PAGAMENTO</h6>
        <img src={image} alt="Formas de pagamento"/>
      </div>
      <div className='text'>
        <p>2022 www.foreverliss.com.br</p>
        <p>Todos os direitos reservados.</p>
        <div className='text2'>
          <p>
            Proibida reprodução total ou parcial.
            IMPORTANTE! Os preços e estoque sujeitos a alterações e podem
            variar sem aviso prévio. Em caso de divergência no valor do
            produto, irá prevalecer sempre o valor do carrinho de compras.
            FOREVER COMPANY COSMETICOS
            LTDA / www.foreverliss.com.br / Rua José Bonifácio, N° 690
            Lençóis Paulista - SP Cep: 18683-420 |
            CNPJ: 08.958.817/0001-89 | Inscrição
            Estadual: 416.118.979.112
          </p>

        </div>
      </div>
    </footer>
  );
}