import { useState } from "react";

function InvoiceForm() {
  const [amount, setAmount] = useState("");
  const [buyer, setBuyer] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [submittedInvoice, setSubmittedInvoice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const invoiceData = {
      amount,
      buyer,
      dueDate,
    };

    setSubmittedInvoice(invoiceData);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Invoice Details</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Invoice Amount:</label><br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Buyer Name:</label><br />
          <input
            type="text"
            value={buyer}
            onChange={(e) => setBuyer(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Due Date:</label><br />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Submit Invoice
        </button>
      </form>

      {submittedInvoice && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Invoice</h3>
          <p><strong>Amount:</strong> ₹{submittedInvoice.amount}</p>
          <p><strong>Buyer:</strong> {submittedInvoice.buyer}</p>
          <p><strong>Due Date:</strong> {submittedInvoice.dueDate}</p>
        </div>
      )}
    </div>
  );
}

export default InvoiceForm;
