import '../global.scss';

function Line ({ color, height=5, width, className, opacity }){
    

    var style = {
        //color: color,
        backgroundColor: color,
        height: height,
        border: 'none',
        width: width,
        margin: 0,
        opacity: opacity 
    }

    return(
        <hr className={className} style={style}></hr>
    )
}





export default Line;