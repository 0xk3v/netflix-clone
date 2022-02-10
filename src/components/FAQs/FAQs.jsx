import { useState } from "react";
import { Input, Button } from "../../utils";
import { FContainer, FList, FWrapper } from "./FAQs.styled";

const List = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <FList open={open}>
      <button onClick={toggleOpen} open={open}>
        {question}
        <p className={open ? "" : "open"}>&times;</p>
      </button>
      {open && <div className="faq-content">{answer}</div>}
    </FList>
  );
};

const FAQs = () => {
  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8 to $16 a month. No extra costs, no contracts.",
    },
    {
      question: "How Can I Cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    },
  ];

  return (
    <FWrapper>
      <FContainer>
        <h1>Frequently Asked Questions</h1>
        <ul>
          {faqs.map((faq, index) => (
            <List question={faq.question} answer={faq.answer} key={index} />
          ))}
        </ul>
        <h2>
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <div className="inputs">
          <Input type="text" inputStyle="lg" placeholder="Email Address" />
          <Button btnStyle="lg">Get Started</Button>
        </div>
      </FContainer>
    </FWrapper>
  );
};

export default FAQs;
