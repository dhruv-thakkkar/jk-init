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
        href="https://wa.me/9898393221?text=I%20have%an%20inquiry!"
      >
        <img
          style={{
            height: "69px",
            width: "69px",
          }}
          src="assets/images/WhatsApp.svg"
          alt=""
        />
      </a>
    </div>
  );
};

export default FAB;
