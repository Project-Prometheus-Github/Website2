import '../global.scss';

function Oval ({ color, size,className,}){
    

    var style = {
        // color: color,
        // backgroundColor: color,
        // height: height,
        // border: 'none',
        // width: width,
        // margin: 0,
        // opacity: opacity,

        width: size,
        height: size,
        backgroundColor: color,
        
    }

    return(
        <div className={className} style={style}></div>
    )
}





export default Oval;