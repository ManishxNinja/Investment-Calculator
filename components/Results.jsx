import { calculateInvestmentResults, formatter } from "../src/util/investment";

export default function Results({userInput}) {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].annualInvestment - resultsData[0].interest
  
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map(YearData => {
          const totalInterest = 
            YearData.valueEndOfYear - 
            YearData.annualInvestment * YearData.year - 
            initialInvestment;
          const totalAmountInvested = YearData.valueEndOfYear - totalInterest;
          return <tr key={YearData.year}>
            <td>{YearData.year}</td>
            <td>{formatter.format(YearData.valueEndOfYear)}</td>
            <td>{formatter.format(YearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
        })}
      </tbody>
    </table>
  );
  
}