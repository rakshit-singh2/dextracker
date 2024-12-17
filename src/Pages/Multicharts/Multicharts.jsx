import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
];

const MultiChart = () => {
  return (

    <div id="page-content-wrapper" className="page-content-wrapper main-content">
        <div class="chartboxmain mainchart px-3 px-md-4 py-3 py-lg-4">
        <div class="d-flex align-items-center gap-2 mb-1"><span class="fw-bold text-white title">Multicharts</span></div>

<div className='row'>
              <div className="col-md-4">
                <div className='chartbox'>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#3ebf81" />
                      <Bar dataKey="profit" fill="#ff6c00" />
                    </BarChart>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#3ebf81" />
                        <Line type="monotone" dataKey="profit" stroke="#ff6c00" />
                      </LineChart>
                    </ResponsiveContainer>
                  </ResponsiveContainer>
                  </div>
            </div>


            <div className="col-md-4">
                <div className='chartbox'>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#8884d8" />
                      <Bar dataKey="profit" fill="#82ca9d" />
                    </BarChart>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                        <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </ResponsiveContainer>
                  </div>
            </div>


            <div className="col-md-4">
                <div className='chartbox'>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#089981" />
                      <Bar dataKey="profit" fill="#f23645" />
                    </BarChart>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#089981" />
                        <Line type="monotone" dataKey="profit" stroke="#f23645" />
                      </LineChart>
                    </ResponsiveContainer>
                  </ResponsiveContainer>
                  </div>
            </div>


            <div className="col-md-4">
                <div className='chartbox'>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#089981" />
                      <Bar dataKey="profit" fill="#f23645" />
                    </BarChart>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#089981" />
                        <Line type="monotone" dataKey="profit" stroke="#f23645" />
                      </LineChart>
                    </ResponsiveContainer>
                  </ResponsiveContainer>
                  </div>
            </div>


            <div className="col-md-4">
                <div className='chartbox'>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#1f58fc" />
                      <Bar dataKey="profit" fill="#f23645" />
                    </BarChart>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#1f58fc" />
                        <Line type="monotone" dataKey="profit" stroke="#f23645" />
                      </LineChart>
                    </ResponsiveContainer>
                  </ResponsiveContainer>
                  </div>
            </div>


            <div className="col-md-4">
                <div className='chartbox'>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#00cadc" />
                      <Bar dataKey="profit" fill="#f23645" />
                    </BarChart>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#00cadc" />
                        <Line type="monotone" dataKey="profit" stroke="#f23645" />
                      </LineChart>
                    </ResponsiveContainer>
                  </ResponsiveContainer>
                  </div>
            </div>


            <div className="col-md-4">
              <a href='#'>
                <div className='addchart'>
                <i class="fa fa-plus"></i>
                  <p>Add Chart</p>
                  <span class="chakra-text custom-9nj7vy">10 of 16 slots remaining</span>
                  </div>
                  </a>
            </div>


            </div>
        </div>
    </div>
  );
};

export default MultiChart;