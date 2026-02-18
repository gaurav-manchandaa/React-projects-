export default function Result ({displaydata,initialammount}){
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>year</th>
                    <th>investment value </th>
                    <th>Intrest (year)</th>
                    <th>Total Intrest </th>
                    <th>Invested capital</th>
                </tr>
                {displaydata.map(item=>(
                    <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{item.annualInvestment}</td>
                        <td>{item.valueEndOfYear}</td>
                        <td>{item.interest}</td>
                        <td>{initialammount}</td>
                    </tr>
                ))}
            </thead>
        </table>
    )
}
// dsiplay data would be an array and this
// arrray would give me the 