import React from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLabel,
} from 'victory';

const ChartIndo = (props) => {
  const chartData = props.DailyCases.map((e) => {
    return e.positif;
  });

  const chartData2 = props.DailyCases.map((e) => {
    return e.sembuh;
  });

  const date = props.DailyCases.map((e) => {
    return e.tanggal.substring(0, 10);
  });

  const data1 = [
    { quarter: 1, earnings: chartData[0] },
    { quarter: 2, earnings: chartData[1] },
    { quarter: 3, earnings: chartData[2] },
    { quarter: 4, earnings: chartData[3] },
    { quarter: 5, earnings: chartData[4] },
    { quarter: 6, earnings: chartData[5] },
    { quarter: 7, earnings: chartData[6] },
  ];

  const data2 = [
    { quarter: 1, earnings: chartData2[0] },
    { quarter: 2, earnings: chartData2[1] },
    { quarter: 3, earnings: chartData2[2] },
    { quarter: 4, earnings: chartData2[3] },
    { quarter: 5, earnings: chartData2[4] },
    { quarter: 6, earnings: chartData2[5] },
    { quarter: 7, earnings: chartData2[6] },
  ];
  return (
    <div className='container'>
      <div className='card shadow border-0'>
        <div className='d-flex justify-content-start ms-4 mt-4'>
          <img
            className='rounded'
            src='/images/analytics.png'
            alt='People'
            style={{ width: '36px' }}
          />
          <h4 className='ms-2'>Grafik Covid 7 Hari Terakhir</h4>
        </div>
        <VictoryChart
          // adding the material theme provided with Victory
          padding={{ top: 5, bottom: 25, left: 60, right: 60 }}
          width={400}
          height={90}
          theme={VictoryTheme.material}
          domainPadding={{ x: 20, y: 10 }}
        >
          <VictoryAxis
            height={100}
            tickValues={[1, 2, 3, 4, 5, 6, 7]}
            tickFormat={date}
            style={{
              tickLabels: { fontSize: 5 },
            }}
          />
          <VictoryAxis
            style={{ tickLabels: { fontSize: 5 } }}
            dependentAxis
            tickValues={[200, 400, 600, 800, 1000, 1200, 1400]}
            tickFormat={(t) => `${Math.round(t)}`}
          />
          <VictoryGroup offset={12} colorScale={'qualitative'}>
            <VictoryBar
              barRatio={0.35}
              animate={{
                duration: 3000,
                onLoad: { duration: 1000 },
              }}
              data={data1}
              x='quarter'
              y='earnings'
              labels={data1.map((e) => {
                return e.earnings;
              })}
              style={{
                data: { fill: '#F16133' },
                labels: { padding: 0, fontSize: 5 },
              }}
              labelComponent={
                <VictoryLabel
                  dy={-2}
                  textAnchor='middle'
                  verticalAnchor='end'
                />
              }
            />
            <VictoryBar
              barRatio={0.35}
              style={{
                data: { fill: '#38A3A5' },
                labels: { padding: 0, fontSize: 5 },
              }}
              animate={{
                duration: 3000,
                onLoad: { duration: 1000 },
              }}
              data={data2}
              x='quarter'
              y='earnings'
              labels={data2.map((e) => {
                return e.earnings;
              })}
              labelComponent={
                <VictoryLabel
                  dy={-2}
                  textAnchor='middle'
                  verticalAnchor='end'
                />
              }
            />
          </VictoryGroup>
        </VictoryChart>
        <div className='d-flex justify-content-center'>
          <div
            className='mt-1 me-1'
            style={{ width: '15px', height: '15px', background: '#F16133' }}
          ></div>
          <p className='fw-bold'>Positif</p>
          <div
            className='mt-1 me-1 ms-2'
            style={{ width: '15px', height: '15px', background: '#38A3A5' }}
          ></div>
          <p className='fw-bold'>Sembuh</p>
        </div>
      </div>
    </div>
  );
};

export default ChartIndo;
