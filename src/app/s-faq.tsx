import { faqData } from "@/data/v-data";
import { Plus } from "lucide-react";

export function HomeFAQ() {
  return (
    <>
      <section className="max-w-[1440px] mx-auto p-8">
        <div className="w-full flex-1">
          {faqData.map((item, index) => {
            return (
              <article className="w-full flex-1" key={index}>
                <div className="flex flex-col justify-center items-center mb-11">
                  <h1 className="text-white text-5xl">{item.title}</h1>
                </div>
                {item.faq.map((info, idx) => {
                  return (
                    <div key={idx}>
                      <details className="w-full border-b border-[#FF6600]/10 p-6 group">
                        <summary className="flex items-center justify-between w-full cursor-pointer">
                          <h3 className="text-white text-3xl font-medium text-start">
                            {info.question}
                          </h3>
                          <Plus className="text-white transition-transform duration-300 group-open:rotate-45" />
                        </summary>
                        <p className="text-white/70 text-center lg:text-start text-base lg:text-xl max-w-[600px] mt-2">
                          {info.answer}
                        </p>
                      </details>
                    </div>
                  );
                })}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
