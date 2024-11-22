import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-router";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
)

it("Should Load Restaurant Menu Component", async()=>{
    await act(async()=> render(
       <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
        </Provider> 
        </BrowserRouter>
    ));

    const accordianHeader = screen.getByText("BURGERS (19)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(19);
    
    const addBtns = screen.getAllByRole("button",{ name: "ADD +"});

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1 items)")).toBeIntheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart (2 items)")).toBeIntheDocument();

    // Why 21 not 2 ..
    /*
     - The cart component renders the same ItemList component called in RestaurantMenu.
     - The ItemList div is assigned foodItems as data-testId.
     - As a result, we will have 19 items on RestaurantMenu + 2 items on Cart Menu
    */
    expect(screen.getAllByTestId("foodItems").length).toBe(21);

    // Clicking on the clear cart button..
    
    const clearCartBtn = screen.getAllByRole("button", { name: "Clear Cart"});
    fireEvent.click(clearCartBtn);

    expect(screen.getAllByTestId("foodItems").length).toBe(19);

    expect(screen.getByText("Cart (0 items)")).toBeIntheDocument();
    
});