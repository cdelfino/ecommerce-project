
// eslint-disable-next-line react/prop-types
const ItemList = ( {greeting, cambiarGreeting} ) => {

  return (
    <div style={{textAlign:"center"}}>
        <h3>{greeting}</h3>
        <button onClick={()=>cambiarGreeting("Bien")}>Cambiar saludo</button>
    </div>
  )
}

export default ItemList