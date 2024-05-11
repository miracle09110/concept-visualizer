import { render, screen } from "@testing-library/react"
import ExploreView from "../../../src/pages/landingPage/explore/Explore.view"

describe("Explore View", () => {
  it('Should render sections with data', () =>{
    //Arrange
    const testConcepts = [
      {
        category: "test-category-1",
        items: ["test-1-item-1","test-1-item-2"]
      },
      {
        category: "test-category-2",
        items: ["test-2-item-1"]
      },
    ]

    render(<ExploreView concepts={testConcepts}/>)

    const headers = screen.getAllByRole('heading')

    expect(headers[1]).toHaveTextContent('test-category-1')
    expect(headers[2]).toHaveTextContent('test-category-2')

    expect(screen.getByText('test-1-item-1')).toBeTruthy()
    expect(screen.getByText('test-1-item-2')).toBeTruthy()
    expect(screen.getByText('test-2-item-1')).toBeTruthy()
  })

  it('Should NOT render sections if data is empty', () =>{
    const testConcepts = []

    render(<ExploreView concepts={testConcepts}/>)

    const headers = screen.getAllByRole('heading')
    expect(headers.length).toBe(1)
    expect(screen.queryByText('test-1-item-1')).not.toBeInTheDocument()
  })
})