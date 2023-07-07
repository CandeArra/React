import './navBar.css';
import CartWidget from './CartWidget/CartWidget';
function NavBar(){
    return (
        <div>
            <header>
                <nav>
                    <div>
                        <h1 className='titulo'>Oversity Store</h1>
                    </div>

                    <div className='contenedorEnlaces'>
                        <a href="#" className="enlace">Inicio</a>
                        <a href="#" className="enlace">Productos</a>
                        <a href="#" className="enlace">Contacto</a>
                        <CartWidget></CartWidget>
                    </div>
                </nav>
            </header>
        </div>
    ) 
}

export default NavBar