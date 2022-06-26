export type Downloads = Record<string, number>

export interface Versions {
  package: string
  downloads: Downloads
}

export async function fetchVersions(name: string): Promise<Versions> {
  const response = await fetch(
    `https://api.npmjs.org/versions/${encodeURIComponent(name)}/last-week`,
  )

  if (response.ok) {
    return response.json()
  } else {
    throw new Error(response.statusText)
  }
}
