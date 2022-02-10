import { Button, Input } from "../../utils";
import { Container, HeroWrapper, Overlay } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroWrapper>
      <Overlay />
      <Container>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="inputs">
          <Input type="text" inputStyle="lg" placeholder="Email Address" />
          <Button btnStyle="lg">Get Started &nbsp; &raquo; </Button>
        </div>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
