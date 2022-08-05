// @vitest-environment jsdom
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"
import * as registry from "./registry"
vi.mock("./PackageChart")

test("App", async () => {
  render(<App />)
  const input = screen.getByPlaceholderText("npm package")
  const submit = screen.getByText("Submit")
  const spy = vi.spyOn(registry, "fetchDownloads")

  expect(input).toHaveFocus()
  expect(submit).toBeDisabled()
  await userEvent.type(input, "npmversions")
  await userEvent.click(submit)
  await waitFor(() => expect(spy).toHaveBeenCalled())
})
