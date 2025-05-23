
function Input(props) {
 //const [data, setData] = useState("");
  return (
    <div>
        <label htmlFor={props.inputId}>
                {props.label}
            </label>
        <input 
            type = {props.type}
            id = {props.inputId}
            className={props.cls}
            onInput = {(e) => {
              props.update(props.inputId, e.currentTarget.value)
            }}/>

            <div lassName = "err"></div>

    </div>
  )
}

export default Input;

