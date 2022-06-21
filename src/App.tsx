import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import PackageChart from './PackageChart'
import { fetchVersions, Versions } from './registry'

export default function App() {
  const [versions, setVersions] = useState<Versions>()

  return (
    <>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={async ({ name }) => setVersions(await fetchVersions(name))}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="search"
              name="name"
              placeholder="npm package"
              autoFocus
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {versions && <PackageChart downloads={versions.downloads} />}
    </>
  )
}
