import { useState } from "react";
import "./App.css";
import Form from "./components/form/form.component";
import Container from "./components/container/container.component";
import Display from "./components/display/display.component";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [repayment, setRepayment] = useState<any>(null);
  return (
    <Container className="px-0 tablet:max-w-[68.8rem] tablet:mx-auto tablet:my-[4rem]">
      <Form setRepayment={setRepayment} />
      <Display repayment={repayment} />
    </Container>
  );
}

export default App;
