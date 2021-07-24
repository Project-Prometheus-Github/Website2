import '../global.scss';

function Line ({ color, height, width, className }){
    

    var style = {
        color: color,
        backgroundColor: color,
        height: height,
        border: 'none',
        width: width,
        margin: 0,
    }

    return(
        <hr className={className} style={style}></hr>
    )
}





export default Line;