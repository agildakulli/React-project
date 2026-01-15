import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs.jsx' 

const HomePage = () => {
  return (
    <>
    < Hero />
    < HomeCards />
    < JobListings limit={10} />
    < ViewAllJobs />
    </>
  )
}

export default HomePage
