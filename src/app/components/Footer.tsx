// Cierre de la página: solo el borde de pasto pixel art
const Footer = () => {
    return (
        <footer
            aria-hidden="true"
            className="w-full h-[clamp(28px,3.5vw,64px)] bg-[url('/footer-grass.png')] bg-[length:auto_100%] bg-bottom bg-repeat-x"
        />
    );
};

export default Footer;
