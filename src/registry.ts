import { compare } from "semver"

export type Downloads = Record<string, number>

interface Versions {
  package: string
  downloads: Downloads
}

export async function fetchDownloads(name: string) {
  const response = await fetch(
    `https://api.npmjs.org/versions/${encodeURIComponent(name)}/last-week`,
  )

  if (response.ok) {
    const { downloads }: Versions = await response.json()
    return Object.keys(downloads)
      .sort(compare)
      .reduce<Downloads>(
        (memo, version) => ({ ...memo, [version]: downloads[version] }),
        {},
      )
  } else {
    throw new Error(response.statusText)
  }
}
