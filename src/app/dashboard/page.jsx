"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function page() {
  const router= useRouter()
  const [isAuthenticated, setisAuthenticated]= useState(false)
  
  useEffect(()=>{
    if(!isAuthenticated)
    {
      router.push("/login")
    }
  },[router])
  return (
    <div>Dashboard</div>
  )
}
