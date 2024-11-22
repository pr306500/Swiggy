    import { render, screen } from "@testing-library/react";
    import Header from "../Header";
    import { Provider } from "react-redux";
    import appStore from "../../utils/appStore";
    import "@testing-library/jest-dom";
    import  { BrowserRouter } from "react-router-dom";

    it("Should load header Component with a login button", ()=> {
        render(
            <BrowserRouter>    
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>    
        );

        const loginButtonText = screen.getByText("Home");
        expect(loginButtonText).toBeInTheDocument();

    });