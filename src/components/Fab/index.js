import "./fab.css";
const FAB = () => {
  return (
    <div className={`fab-container`}>
      <a
        style={{
          border: "none",
          backgroundColor: "transparent",
        }}
        target="_blank"
        href="https://wa.me/9898393221?text=Hi,%20I%20have%20an%20inquiry!"
      >
        <img
          style={{
            height: "79px",
            width: "59x",
          }}
          src="assets/images/whatsapp1.png"
          alt="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default FAB;
