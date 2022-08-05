import { rest } from "msw"
import { fetchDownloads } from "./registry"
import { server } from "./setupTests"

test("fetchDownloads", async () => {
  expect(await fetchDownloads("npmversions")).toEqual({ "1.0.0": 100 })
})

test("fetchDownloads with network error", async () => {
  server.use(
    rest.get(
      "https://api.npmjs.org/versions/:package/last-week",
      (_req, res, ctx) => res(ctx.status(500)),
    ),
  )
  await expect(() => fetchDownloads("npmversions")).rejects.toThrow(
    "Internal Server Error",
  )
})
