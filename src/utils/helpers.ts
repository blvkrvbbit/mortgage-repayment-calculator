function calculateMortgage(
  principal: number,
  annualRate: number,
  years: number
) {
  const monthlyRate = annualRate / 100 / 12; // Convert annual rate to monthly decimal
  const totalPayments = years * 12; // Total number of months

  if (monthlyRate === 0) {
    const totalRepayment = principal; // If 0% interest, total repayment = principal
    return {
      monthlyPayment: (principal / totalPayments).toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
    };
  }

  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  const totalRepayment = monthlyPayment * totalPayments; // Total amount paid over the term

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalRepayment: totalRepayment.toFixed(2),
  }; // Return as fixed decimal (2 places)
}

export default calculateMortgage;
