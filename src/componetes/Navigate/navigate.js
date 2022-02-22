import { Link } from 'react-router-dom';
import './navigate.css'

function navigate() {
    const itens = [
        "PERFUME INFANTIL",
        "SABONETES",
        "PÓS-BANHO",
        "ASSADURAS",
        "HIDRATANTES",
        "LENÇOS UMEDECIDOS"
    ];
    return(
        <nav>
            {itens.map(item => (
                <Link to="/home">
                    <p>{item}</p>
                </Link>
            ))}
        </nav>
    );
}

export default navigate
