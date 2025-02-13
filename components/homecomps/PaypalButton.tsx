
import {FUNDING, PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import { OrderResponseBody } from "@paypal/paypal-js";

interface PaypalButtonProps {
    amount: string;
    onSuccess: (details: OrderResponseBody) => void;
}

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

if (!clientId) {
  throw new Error("NEXT_PUBLIC_PAYPAL_CLIENT_ID is not defined in the environment variables.");
}

const PaypalButton = ({amount, onSuccess}: PaypalButtonProps) => {
  return (
    <PayPalScriptProvider 
    options={{
        clientId: clientId,
        currency: "USD",
    }}>
        <PayPalButtons fundingSource={FUNDING.PAYPAL} createOrder={(data, actions)=>{
            return actions.order.create({
                intent: "CAPTURE",
                purchase_units:[
                    {
                        amount:{
                            value:amount,
                            currency_code: "USD",
                        }
                    }
                ]
            })
        }}
        onApprove={(data, actions) => {
            if (!actions.order) {
              throw new Error("Order actions are not available.");
            }
            console.log(data);
            return actions.order.capture().then((details) => {
              onSuccess(details);
            });
          }}
        />
    </PayPalScriptProvider>
  )
}

export default PaypalButton
