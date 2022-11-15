import React from 'react'
import { useSearchParams } from "react-router-dom";

export default function Detail() {
  const [searchParams] = useSearchParams()
  let id = searchParams.getAll('id')[0]
  let name = searchParams.getAll('id')[1]
  return (
    <h2>详情页Detail - {id} {name}</h2>
  )
}
