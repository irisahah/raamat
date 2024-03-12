function RaamatuteLoetelu(props) {
    const raamatuNimed = props.raamatud.map((raamat) => {
        return (
            <div><li>{raamat.title}</li></div>
        )
    
    })
    
        return (
            <div>
                <h>Book List</h>
                <ul>{raamatuNimed}</ul>        
            </div>
        )
    }
    
    export default RaamatuteLoetelu;