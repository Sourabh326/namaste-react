import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom";

describe("Contact us page test", ()=> {
    render(<Contact />);

    test("should be render the contact us component",()=>{    
        const contact = screen.getByRole("heading");
        expect(contact).toBeInTheDocument();
    })
})


