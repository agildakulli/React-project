import React from 'react'
import Card from './Card';

const HomeCards = () => {
    return (
            <section className='py-4'>
            <div className='container-xl lg:container m-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                    <Card>
                        <h2 className='text-2xl font-bold '> For Developers </h2>
                        <p className='mt-2 mb-4'>Browse our react jobs and start your career today</p>
                        <a href='/jobs.html' className='bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800'>Browse Jobs</a>
                    </Card>
                    <Card>
                        <h2 className='text-2xl font-bold '> For Employers </h2>
                        <p className='mt-2 mb-4'>Post a job to find the perfect react developer for your team</p>
                        <a href='/add-job.html' className='bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800'>Post a Job</a>
                    </Card>
                    </div>
                </div>
        </section>
    )
}

export default HomeCards