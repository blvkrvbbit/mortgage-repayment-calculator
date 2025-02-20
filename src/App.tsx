import { useState } from "react";
import "./App.css";
import Form from "./components/form/form.component";
import Container from "./components/container/container.component";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [repayment, setRepayment] = useState<any>(null);
  return (
    <>
      <Form setRepayment={setRepayment} />
      {!repayment && (
        <div className="display py-[3.2rem] mt-[3.2rem] bg-slate-900 w-full  flex flex-col gap-[1.6rem] justify-center items-center">
          <img src="/results.svg" alt="hello" />
          <h2 className="text-white text-preset-2 font-bold">
            Results Shown Here
          </h2>
          <p className="text-slate-300  text-preset-4 text-center max-w-[32.7rem]">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
      {repayment && (
        <div className="mt-[3.2rem] bg-slate-900 w-full ">
          <Container className="pb-[3.2rem]">
            <div className="pt-[3.2rem] mb-[2.4rem] ">
              <h2 className="text-white text-preset-2 font-bold">
                Your Results
              </h2>
              <p className="text-slate-300  text-preset-4  max-w-[32.7rem]">
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                “calculate repayments” again.
              </p>
            </div>
            <div className="bg-black/25  py-[2.4rem] px-[1.6rem] border-t-[0.4rem] rounded-[0.8rem] border-lime">
              <div>
                <h3 className="text-preset-4 text-slate-300 mb-[0.8rem]">
                  Your monthly repayments
                </h3>
                <div className="text-preset-1 text-lime font-bold mb-[1.6rem]">
                  £{repayment.monthlyPayment}
                </div>
              </div>
              <hr className="border-0 h-[0.1rem] bg-slate-300/25 w-full mb-[1.6rem]" />
              <div>
                <h3 className="text-preset-4 text-slate-300 mb-[0.8rem]">
                  Total you'll repay over the term
                </h3>
                <p className="text-preset-2 font-bold text-white">
                  ${repayment.totalRepayment}
                </p>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default App;
