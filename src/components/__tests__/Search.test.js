import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should search res list for burger text input", async()=>{
     await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
          )
     );

     const searchButton = screen.getByRole("button", { name: "Search" });

     const searchInput = screen.getByTestId("searchInput");

     fireEvent.change(searchInput, { target: { value : "burger" }});

     fireEvent.click(searchButton);

     const cards = screen.getAllByTestId("resCard");

     expect(cards.length).toBe(1);
});

it("Should render top rated restaurant", async()=>{
    await act(async () => 
       render(
           <BrowserRouter>
               <Body/>
           </BrowserRouter>
         )
    );
    
    /*
      Should add case where we assert the no. of cards
      before clicking the "Top Rated Restaurants" button.
    */

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });

    fireEvent.click(topRatedBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(3);
});