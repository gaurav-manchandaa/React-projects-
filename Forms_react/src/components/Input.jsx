export default function Input({label , id , ...props }){
    return (
        <div className="control">
        <label htmlFor="password">{lable}</label>
        <input
          id={id}
         {...props}
          required
          minLength={6}
        />
      </div>
    )
}