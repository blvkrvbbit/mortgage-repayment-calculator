import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import CustomInput from "../custom-input/custom-input.component";
import CustomRadio from "../custom-radio/custom-radio.component";
import Container from "../container/container.component";
import Button from "../button/button.component";
import calculateMortgage from "../../utils/helpers";

// type FormData = {
//   mortgageAmount: number;
//   mortgageTerm: number;
//   interestRate: number;
//   mortgageType: string;
// };

const schema = z.object({
  mortgageAmount: z.string(),
  mortgageTerm: z.string(),
  interestRate: z.string(),
  mortgageType: z.enum(["Repayment", "Interest Rate"], {
    errorMap: () => ({ message: "Please choose one" }),
  }),
});

type FormData = z.infer<typeof schema>;

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRepayment: (repayment: any) => void;
};
const Form = ({ setRepayment }: Props) => {
  const {
    control,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    const repayment = calculateMortgage(
      Number(data.mortgageAmount),
      Number(data.interestRate),
      Number(data.mortgageTerm)
    );
    setRepayment(repayment);
    console.log("repayment", repayment);
    console.log(data);
  };

  const resetForm = () => {
    reset();
    setRepayment(null);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[3.2rem] flex flex-col  gap-[0.8rem] mb-[2.4rem]">
          <h1 className="text-preset-2 text-slate-900 font-bold">
            Mortgage Calculator
          </h1>
          <button
            onClick={resetForm}
            className="text-slate-700 flex-none w-[6.2rem] text-preset-4 underline"
          >
            Clear All
          </button>
        </div>
        <Controller
          name="mortgageAmount"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <CustomInput
              label="Mortgage Amount"
              prefix="£"
              value={field.value}
              onChange={field.onChange}
              placeholder=""
            />
          )}
        />
        <Controller
          name="mortgageTerm"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <CustomInput
              label="Mortgage Term"
              suffix="years"
              value={field.value}
              onChange={field.onChange}
              placeholder=""
            />
          )}
        />
        <Controller
          name="interestRate"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <CustomInput
              label="Interest Rate"
              suffix="%"
              value={field.value}
              onChange={field.onChange}
              placeholder=""
            />
          )}
        />
        <Controller
          name="mortgageType"
          control={control}
          render={({ field }) => (
            <CustomRadio
              options={[
                { label: "Repayment", value: "Repayment" },
                { label: "Interest Rate", value: "Interest Rate" },
              ]}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {/* <button type="submit">Submit</button> */}
        <Button className="w-full cursor-pointer" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Form;
