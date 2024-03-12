function RaamatuteLoetelu(props) {
    const raamatuNimed = props.raamatud.map((raamat) => {
        return (
            <div>{raamat.nimi}</div>
        )
    
    })
    
        return (
            <div>
                <h>Raamatute loetelu</h>
                <ul>{raamatuNimed}</ul>        
            </div>
        )
    }
    
    export default RaamatuteLoetelu;