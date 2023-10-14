import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row copyright">
          <div className="footer-menu">
            <h4 style={{ color: "white" }}>
              Developed with ♥ by{" "}
              <a
                href="https://www.linkedin.com/in/rushikesh-sasamkar/"
                target="_blank"
                rel="noreferrer"
              >
                Rushikesh Sasamkar 😊
              </a>
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
