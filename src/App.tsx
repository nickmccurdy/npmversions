import { useState } from "react"
import PackageChart from "./PackageChart"
import { fetchVersions, Versions } from "./registry"

export default function App() {
  const [name, setName] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [versions, setVersions] = useState<Versions>()

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault()
          setSubmitting(true)
          setVersions(await fetchVersions(name))
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

      {versions && <PackageChart downloads={versions.downloads} />}
    </>
  )
}
