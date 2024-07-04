import { IconButton as OldIconButton} from "@mui/material";

export default function IconButton(props){
    return(
        <OldIconButton {...props}>
            {props.children}
        </OldIconButton>
    );
}