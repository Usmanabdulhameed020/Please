import React, { useState, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Mortgage() {
  const [price, setPrice] = useState(1988000);
  const [down, setDown] = useState(397600);
  const [rate, setRate] = useState(6.223);
  const [tax, setTax] = useState(2071);
  const [insurance, setInsurance] = useState(547);
  const [hoa, setHoa] = useState(0);
  const [mortgageIns, setMortgageIns] = useState(0);
  const [years, setYears] = useState(30);

  const loanAmount = price - down;
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = years * 12;

  const principalInterest = loanAmount
    ? (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
    : 0;

  const monthlyPayment =
    principalInterest + tax + insurance + hoa + mortgageIns;

  const amortizationData = useMemo(() => {
    let balance = loanAmount;
    const data = [];

    for (let i = 1; i <= numberOfPayments; i++) {
      const interest = balance * monthlyRate;
      const principal = principalInterest - interest;
      balance -= principal;
      data.push({ month: i, balance: Math.max(balance, 0) });
    }

    return data;
  }, [loanAmount, principalInterest, monthlyRate, numberOfPayments]);

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-900">
 
      <h1 className="text-4xl font-bold mb-8 text-blue-700">
        Mortgage Calculator
      </h1>

      <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        <aside className="lg:col-span-1 sticky top-8 h-fit space-y-6">

          <section>
            <p className="text-4xl font-bold text-blue-700">
              ${monthlyPayment.toLocaleString()}/month
            </p>
            <p className="text-gray-500 mb-5">
              {years}-year fixed rate of {rate}%
            </p>
          </section>

          <section className="h-3 w-full bg-gray-300 rounded-full overflow-hidden flex">
            <div style={{ width: `${(principalInterest / monthlyPayment) * 100}%` }} className="bg-blue-700" />
            <div style={{ width: `${(tax / monthlyPayment) * 100}%` }} className="bg-blue-500" />
            <div style={{ width: `${(insurance / monthlyPayment) * 100}%` }} className="bg-sky-600" />
            <div style={{ width: `${(hoa / monthlyPayment) * 100}%` }} className="bg-blue-300" />
            <div style={{ width: `${(mortgageIns / monthlyPayment) * 100}%` }} className="bg-indigo-400" />
          </section>

          <ul className="mt-4 space-y-2">
            <li className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-700 rounded-full"></span>
                Principal & interest
              </span>
              <b>${principalInterest.toLocaleString()}</b>
            </li>

            <li className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                Property tax
              </span>
              <b>${tax.toLocaleString()}</b>
            </li>

            <li className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-sky-600 rounded-full"></span>
                Home insurance
              </span>
              <b>${insurance.toLocaleString()}</b>
            </li>

            <li className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                HOA fees
              </span>
              <b>${hoa.toLocaleString()}</b>
            </li>

            <li className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-indigo-400 rounded-full"></span>
                Mortgage insurance
              </span>
              <b>${mortgageIns.toLocaleString()}</b>
            </li>
          </ul>

          <section className="grid grid-cols-1 gap-13 mt-6">
            {[
              "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
              "https://plus.unsplash.com/premium_photo-1748265769012-5790a2a39ddb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
              "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
              "https://plus.unsplash.com/premium_photo-1748265794414-32c3a7fcd5a3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img src={img} alt="Apartment" className="w-full h-40 object-cover" />
              </div>
            ))}
          </section>
        </aside>

        <main className="lg:col-span-2 space-y-10">

          <section className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">Home price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full mt-1 p-3 border rounded-xl"
              />
              <input
                type="range"
                min={500000}
                max={3000000}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">Down payment</label>
              <input
                type="number"
                value={down}
                onChange={(e) => setDown(Number(e.target.value))}
                className="w-full mt-1 p-3 border rounded-xl"
              />
              <input
                type="range"
                min={0}
                max={price}
                value={down}
                onChange={(e) => setDown(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">Loan type</label>
              <select
                className="w-full p-3 border rounded-xl mt-1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
              >
                <option value={30}>30-year fixed</option>
                <option value={20}>20-year fixed</option>
                <option value={15}>15-year fixed</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">Interest rate</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full mt-1 p-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="font-semibold">Property tax</label>
              <input
                type="number"
                value={tax}
                onChange={(e) => setTax(Number(e.target.value))}
                className="w-full mt-1 p-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="font-semibold">Home insurance</label>
              <input
                type="number"
                value={insurance}
                onChange={(e) => setInsurance(Number(e.target.value))}
                className="w-full mt-1 p-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="font-semibold">HOA fees</label>
              <input
                type="number"
                value={hoa}
                onChange={(e) => setHoa(Number(e.target.value))}
                className="w-full mt-1 p-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="font-semibold">Mortgage insurance</label>
              <input
                type="number"
                value={mortgageIns}
                onChange={(e) => setMortgageIns(Number(e.target.value))}
                className="w-full mt-1 p-3 border rounded-xl"
              />
            </div>

          </section>

          <section className="bg-white shadow-xl p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              Loan Amortization
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={amortizationData}>
                <XAxis dataKey="month" hide />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="blue"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </section>

          <section className="bg-white shadow-xl p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              Loan Eligibility
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div>
                <label className="font-semibold">Annual Income ($)</label>
                <input
                  type="number"
                  id="annualIncome"
                  placeholder="Enter your annual income"
                  className="w-full mt-1 p-3 border rounded-xl"
                />
              </div>

              <div>
                <label className="font-semibold">Monthly Debts ($)</label>
                <input
                  type="number"
                  id="monthlyDebts"
                  placeholder="Enter your monthly debts"
                  className="w-full mt-1 p-3 border rounded-xl"
                />
              </div>

              <div>
                <label className="font-semibold">Credit Score</label>
                <input
                  type="number"
                  id="creditScore"
                  placeholder="Enter your credit score"
                  className="w-full mt-1 p-3 border rounded-xl"
                />
              </div>
            </div>

            <button
              onClick={() => {
                const income = Number(document.getElementById("annualIncome").value);
                const debts = Number(document.getElementById("monthlyDebts").value);
                const credit = Number(document.getElementById("creditScore").value);

                const dti = debts / (income / 12);
                let message = "";

                if (income <= 0 || debts < 0 || credit <= 0) {
                  message = "Please enter valid information.";
                } else if (credit < 580) {
                  message = "Loan not approved — credit score too low.";
                } else if (dti > 0.45) {
                  message = "Loan not approved — DTI ratio too high.";
                } else {
                  message = "Approved! You qualify for this loan based on your profile.";
                }

                alert(message);
              }}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Check Loan Eligibility
            </button>
          </section>

        </main>
      </div>
    </div>
  );
}
