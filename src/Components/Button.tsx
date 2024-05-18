function BARButton (props : any){
    const {className,btnValue,btnClick,style} = props
    return <button style={style} onClick={btnClick} className={className}>{btnValue}</button>
}
export default BARButton