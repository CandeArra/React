import './itemListContainer.css';
function ItemListContainer(props){
    return (
        <div className='contenedorSaludo'>
            <h2 className='saludo'> {props.greeting}</h2>
        </div>
    ) 
}

export default ItemListContainer