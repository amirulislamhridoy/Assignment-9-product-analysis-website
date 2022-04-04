import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    // or data.json file ase save kora
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    // console.log(datas)
    return (
        <div>
            <div className='flex justify-around mt-10'>
                <div>
                    <h3 className='uppercase text-xl font-semibold text-center'>Month wise Sell</h3>
                    <LineChart width={600} height={400} data={datas}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="sell" />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </div>
                <div>
                    <h3 className='uppercase text-xl font-semibold text-center'>Investment Vs Revenue</h3>
                    <AreaChart
                        width={600}
                        height={400}
                        data={datas}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 50,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </AreaChart>
                </div>
            </div>
            <div className='flex justify-around mt-10'>
                <div>
                    <h3 className='uppercase text-xl font-semibold text-center'> Investment VS Revenue</h3>
                    <BarChart
                        width={500}
                        height={300}
                        data={datas}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div>
                    <h3 className='uppercase text-xl font-semibold text-center'>Investment VS Revenue</h3>
                    <PieChart width={400} height={400}>
                        <Pie data={datas} dataKey="sell" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />

                        <Pie data={datas} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={100} fill="#82ca9d" label />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;