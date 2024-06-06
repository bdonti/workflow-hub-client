import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useRef, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { getMonth, getYear, setMonth, setYear } from "date-fns";
import { Label, TextInput } from "flowbite-react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

const Checkout = ({ salary, email, name }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic();

  const cardElementRef = useRef(null);

  const handleYearChange = (date) => {
    const newDate = setYear(selectedDate, getYear(date));
    setSelectedDate(newDate);
  };

  const handleMonthChange = (date) => {
    const newDate = setMonth(selectedDate, getMonth(date));
    setSelectedDate(newDate);
  };

  useEffect(() => {
    if (salary > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: salary })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosPublic, salary]);

  const handleSubmitPayment = async (event) => {
    event.preventDefault();
    const form = event.target;
    const salary = form.salary.value;
    const month = form.month.value;
    const year = form.year.value;

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: "hrworkflowhub@gmail.com",
            name: "HRWorkFlowHub",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const payment = {
          employeeEmail: email,
          employeeName: name,
          employeeSalary: salary,
          month: month,
          year: year,
          transactionId: paymentIntent.id,
        };

        const res = await axiosPublic.post("/payments", payment);
        if (res.data?.paymentResult?.insertedId) {
          toast.success("Salary Successfully Paid");
        }
      }
    }
  };

  return (
    <div>
      <form
        className="w-full max-w-lg mx-auto p-4"
        onSubmit={handleSubmitPayment}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="salary" value="Employee Salary" />
          </div>
          <TextInput
            type="number"
            name="salary"
            defaultValue={salary}
            disabled
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="month" value="Month of Payment" />
          </div>
          <DatePicker
            selected={selectedDate}
            onChange={handleMonthChange}
            dateFormat="MM"
            showMonthYearDropdown
            showMonthYearPicker
            name="month"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="year" value="Year of Payment" />
          </div>
          <DatePicker
            selected={selectedDate}
            onChange={handleYearChange}
            dateFormat="yyyy"
            showYearPicker
            name="year"
          />
        </div>
        <div className="mb-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "24px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            className="p-3 border rounded"
            ref={cardElementRef}
          />
        </div>
        <button
          className="btn btn-sm btn-primary my-4 w-full"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="font-bold text-red-700 my-4">{error}</p>
        {transactionId && (
          <p className="font-bold text-green-700 my-4">
            Salary Successfully Paid! Transaction Id is: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
