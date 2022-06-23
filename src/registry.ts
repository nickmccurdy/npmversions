export type Downloads = Record<string, number>

export interface Versions {
  package: string
  downloads: Downloads
}

export async function fetchVersions(name: string): Promise<Versions> {
  const response = await fetch(
    `https://api.npmjs.org/versions/${name.replace("/", "%2F")}/last-week`,
  )

  if (response.ok) {
    return response.json()
  } else {
    let data
    try {
      data = await response.json()
    } finally {
      throw new Error(data?.message ?? data?.error ?? response.statusText)
    }
  }
}
