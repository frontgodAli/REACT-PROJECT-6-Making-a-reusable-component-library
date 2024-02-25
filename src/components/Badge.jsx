import classNames from "classnames"

export default function Badge({ children , color , type="square" }){
    const colorClass=color && `badge-${color}`
    const typeClass=type &&`badge-${type}`
    const allClasses=classNames("badge",colorClass,typeClass)
    
    return(
    <div className={allClasses}>
        {children}
    </div>)
}