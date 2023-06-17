const CartWidget = () => {
  const cartCount = 1; // Número de elementos en el carrito

  const styles = {
    // Estilos del contenedor del carrito
    cartContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    // Estilos del círculo
    circle: {
      position: "absolute",
      top: "-10px",
      right: "-10px",
      backgroundColor: "#3e3e3e",
      color: "#FFFFFF",
      borderRadius: "50%",
      width: "25px",
      height: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "17px",
    },
    // Estilos de la imagen del carrito
    cartImage: {
      width: 40,
      filter: "invert(1)",
    },
  };

  return (
    <div style={styles.cartContainer}>
      <img
        src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
        alt=""
        style={styles.cartImage}
      />
      {cartCount > 0 && <div style={styles.circle}>{cartCount}</div>}
    </div>
  );
};

export default CartWidget;
