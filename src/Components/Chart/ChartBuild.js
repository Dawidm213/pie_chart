import Chart from "react-google-charts";

export function ChartBuild({ chartData, checked }){

    return(
        
        <div>
            <Chart
            width={'100%'}
            height={'300px'}
            graphID='Graph'
            chartType="PieChart"
            loader={<div>Loading Pie Chart</div>}
            data={chartData.map(data => {
                return data.data
            })}
            
            options={{
                title: `In Total`,
                is3D: checked,
                titleTextStyle: {
                  fontSize: 44
              }
            }}
        />
        </div>
    );
};