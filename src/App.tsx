import { useState } from "react"
import PackageChart from "./PackageChart"
import { Downloads, fetchDownloads } from "./registry"

export default function App() {
  const [name, setName] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [downloads, setDownloads] = useState<Downloads>()

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault()
          setSubmitting(true)
          setDownloads(await fetchDownloads(name))
          setSubmitting(false)
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="search"
          placeholder="npm package"
          autoFocus
        />
        <button disabled={!name || submitting}>Submit</button>
      </form>

      {downloads && <PackageChart downloads={downloads} />}
    </>
  )
}
