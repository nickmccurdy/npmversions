export type Downloads = Record<string, number>

export interface Versions {
  package: string
  downloads: Downloads
}

export async function fetchDownloads(name: string): Promise<Downloads> {
  const response = await fetch(
    `https://api.npmjs.org/versions/${encodeURIComponent(name)}/last-week`,
  )

  if (response.ok) {
    const versions: Versions = await response.json()
    return versions.downloads
  } else {
    throw new Error(response.statusText)
  }
}
