import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

/*
The @testing-library/jest-dom library is an extension for Jest that provides a set of custom matchers
tailored for testing DOM elements. It enhances the readability and expressiveness of test assertions 
by allowing you to write intuitive, user-centric assertions when testing 
React components (or any DOM-related code).
*/
import "@testing-library/jest-dom";

describe("Contact us page test case", ()=>{
     test("Should load contact us component",() => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        
        expect(heading).toBeInTheDocument();
     });
     
     test("Should load button inside contact component",() => {
         render(<Contact/>);
         const button = screen.getByRole("button");
         
         expect(button).toBeInTheDocument();
     });
     
     test("Should check text exists inside contact component",()=>{
       render(<Contact/>);
       const button = screen.getByText("Submit");
       expect(button).toBeInTheDocument();
     });
     
     test("Should load input name inside contact component",()=>{
         render(<Contact/>);
         const inputName = screen.getByPlaceholderText("name");
         expect(inputName).toBeInTheDocument();
     });
     
     test("Should load 2 input boxes on the contact",() => {
         render(<Contact/>);
         const inputBoxes = screen.getAllByRole("textbox");
     
         // assertion
         expect(inputBoxes.length).toBe(2);
     });
})

