import { Alert as OldAlert} from "@mui/material";

const Alert = (props) => {
  return (<OldAlert icon={props.icon} {...props}>
            {props.children}
         </OldAlert>);
}

export default Alert;