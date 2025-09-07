
const ByTicket =() => {
  const methods = [
    { name: "Kreditkarte", icons: ["💳"] },
    { name: "PayPal", icons: ["🅿️"] },
    { name: "SEPA-Lastschrift", icons: ["🏦"] },
    { name: "Giropay / Girocard", icons: ["💶"] },
    { name: "Klarna Sofortüberweisung", icons: ["⚡"] },
  ];

  return (
    <div className="flex flex-col justify-start pt-[50px] lg:pt-0 lg:justify-center w-full h-screen text-black">
          <div className="text-center">
              <h1 className="text-[30px] lg:text-[40px] font-bold mb-4">Secure payment</h1>
              <p className="text-[15px] lg:text-[18px]">This is only a purchase simulation.</p>
              <p>Goal achieved</p>
          </div>
        <div className="max-w-[90%] lg:max-w-[70%] w-full mx-auto bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 mb-6">Choose a payment method:</p>
          <div className="space-y-3">
            {methods.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between border rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer"
              >
                <span className="font-medium">{m.name}</span>
                <span className="text-2xl">{m.icons.join(" ")}</span>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
export default ByTicket;