import React, {useState, useEffect} from 'react'
import {createClient} from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

const Index = () => {
  const [entries, setEntries] = useState([])
  useEffect(async () => {
    setEntries(await client.getEntries())
  }, [])
  return (
    <>
      {entries.items?.map(i => (
        <div key={i.sys.id}>
          {i.sys.id}
        </div>
      ))}
    </>
  )
}

export default Index