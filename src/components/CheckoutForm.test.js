import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import "mutationobserver-shim";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
	render(<CheckoutForm/>);
	const text = screen.getByText("Checkout Form");
   	expect(text).toHaveTextContent(/Checkout Form/i)
});

test("form shows success message on submit with form details", async () => {
	//first of all need to render our component
	render(<CheckoutForm/>);
 
	//assign our fields and submit button to the variables
	const firstName = screen.getByLabelText(/first name/i);
	const lastName = screen.getByLabelText(/last name/i);
	const address = screen.getByLabelText(/address/i);
	const city = screen.getByLabelText(/city/i);
	const state = screen.getByLabelText(/state/i);
	const zip = screen.getByLabelText(/zip/i);
	const submitBtn = screen.getByRole("button", { name: /checkout/i });
  
  
	//add some input in our fields
	fireEvent.change(firstName, {
		target: {name: "firstName", value: "Eli"}
	});
	fireEvent.change(lastName, {
		target: {name: "lastName", value: "Ted"}
	});
	fireEvent.change(address, {
		target: {name: "address", value: "test"}
	});
	fireEvent.change(city, {
		target: {name: "city", value: "Fremont"}
	});
	fireEvent.change(state, {
		target: {name: "state", value: "CA"}
	});
	fireEvent.change(zip, {
		target: "zip", value: "94555"
	});
  
	//click submit button
	fireEvent.click(submitBtn);
  
	//checking our success message by text
	const sucessful_message = await screen.findByText(/You have ordered some plants! Woo-hoo!/i);
	expect(sucessful_message).toBeInTheDocument();

});
