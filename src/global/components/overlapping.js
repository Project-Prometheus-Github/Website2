import '../global.scss';

function Circles ({ color1,size,className, color2,size2}){
    
var x = size+300;
var y = `${x}`
    var style1 = {
        // color: color,
        // backgroundColor: color,
        // height: height,
        // border: 'none',
        // width: width,
        // margin: 0,
        // opacity: opacity,

        width: size,
        height: size,
        backgroundColor: color1,
        position: 'absolute',  
    }
    var style2 = {
        // color: color,
        // backgroundColor: color,
        // height: height,
        // border: 'none',
        // width: width,
        // margin: 0,
        // opacity: opacity,

        width: size2,
        height: size2,
        backgroundColor: color2,
        position: 'absolute',
        //margin:  {`300px ${y}`},  
    }

    

    return(
    <div>
        <div className={className} style={style1}></div>
        <div className = {className} style ={style2}></div>
    </div>
    )
}





export default Circles;