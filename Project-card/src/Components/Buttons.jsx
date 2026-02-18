export default function Button({label, tailwind }){
    return(
        <button className={tailwind}>{label}</button>
    )
}