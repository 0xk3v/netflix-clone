import { FooterContainer, FooterWrapper } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <p>Questions? Call 00 800 112 4392</p>
        <div className="footer-lists">
          <ul>
            <li>FAQs</li>
            <li>Investor Relations</li>
            <li>Ways to Watch</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Terms to use</li>
          </ul>
        </div>
        <p>Netflix, US</p>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
