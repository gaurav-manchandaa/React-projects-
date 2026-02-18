import { Fragment } from "react"
export default function Input ({label , inputtype="text",inputstyle , labelstyle , ref,...props }){
    return(
        <Fragment>
        <label htmlFor={label} className={labelstyle}>{label}</label>
        <input type={inputtype} id={label} className={inputstyle}  ref={ref}{...props} />
        </Fragment>
    )
}