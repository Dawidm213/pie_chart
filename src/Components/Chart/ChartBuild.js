import Chart from "react-google-charts";

export function ChartBuild({ chartData, checked }){

    return(
        
        <div>
            <Chart
            width={'100%'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Pie Chart</div>}
            data={chartData.map(data => {
                return data.data
            })}
            
            options={{
                title: `In Total`,
                is3D: checked,
                backgroundColor: 'grey',
                titleTextStyle: {
                  fontSize: 44
              }
            }}
        />
        </div>
    );
};
export function ChartBuild2({ chartData }){

    return(
        
        <div>
            <Chart
            width={'100%'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Pie Chart</div>}
            data={chartData.map(data => {
                return data.data
            })}
            
            options={{
                title: `In Total`,
                pieHole: 0.4,
                backgroundColor: 'grey',
                titleTextStyle: {
                  fontSize: 44
              }
            }}
        />
        </div>
    );
};

export function ChartBuild3({ chartData, diffdata }){

    return(
        
        <div>
            <Chart
            width={'100%'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Pie Chart</div>}
            data={chartData.map(data => {
                return data.data
            })}
            
            options={{
                title: `In Total`,
                pieHole: 0.4,
                backgroundColor: 'grey',
                titleTextStyle: {
                  fontSize: 44
              }
            }}
        />
        </div>
    );
};