import { Button as OldButton} from "@mui/material";

export default function Button(props){
    return(
        <OldButton{...props}>
            {props.children}
        </OldButton>
    );
}

Button.defaultProps={
    color : "primary",
    variant : "solid",
}