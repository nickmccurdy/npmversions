/// <reference types="vitest/globals" />
import { rest } from "msw"
import { setupServer } from "msw/node"
import fetch from "node-fetch"
import { Versions } from "./registry"
import "@testing-library/jest-dom"

vi.stubGlobal("fetch", fetch)

export const server = setupServer(
  rest.get<never, { package: string }, Versions>(
    "https://api.npmjs.org/versions/:package/last-week",
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          package: req.params.package,
          downloads: { "1.0.0": 100 },
        }),
      ),
  ),
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
