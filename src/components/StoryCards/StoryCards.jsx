import { CardItem, CardsWrapper } from "./StoryCards.styled";

const StoryCards = () => {
  return (
    <CardsWrapper>
      <Card />
      <Card2 />
      <Card3 />
    </CardsWrapper>
  );
};

const Card = () => {
  return (
    <CardItem>
      <div className="contents">
        <div className="desc">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div className="media">
          <img src="/img/tv.png" alt="TV" />
          <div className="tv-animation">
            <video autoPlay muted playsInline="" loop>
              <source src="/video/video-tv-0819.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </CardItem>
  );
};

const Card2 = () => {
  return (
    <CardItem>
      <div className="contents">
        <div className="media">
          <img src="/img/mobile-0819.jpg" alt="Mobile" />
          <div className="card">
            <div className="icon">
              <img src="/img/boxshot.png" alt="Box Shot" />
            </div>
            <div className="details">
              <h4>Stranger Things</h4>
              <p>Downloading</p>
            </div>
          </div>
        </div>
        <div className="desc">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
      </div>
    </CardItem>
  );
};

const Card3 = () => {
  return (
    <CardItem>
      <div className="contents">
        <div className="desc">
          <h1>Create profiles for kids.</h1>
          <h2>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h2>
        </div>
        <div className="media">
          <img src="/img/kids.png" alt="Kids Shows" />
        </div>
      </div>
    </CardItem>
  );
};

export default StoryCards;
