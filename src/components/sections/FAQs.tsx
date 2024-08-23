import { FAQs } from "@/constants/data";
import Accordion from "../ui/accordian";
import Header from "../ui/header";

const FAQ = () => {
  return (
    <section className="container pb-20">
      <div className="mb-7">
        <Header
          title={"Frequently Asked Questions"}
          description={
            " Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          }
          showAbstract={true}
        />
      </div>
      <div className="flex flex-col item-center justify-between gap-4 md:flex-row md:flex-wrap">
        {FAQs.map(({ question, answer }) => (
          <Accordion title={question} content={answer} key={question} />
        ))}
      </div>
    </section>
  );
};
export default FAQ;
