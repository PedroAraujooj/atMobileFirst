import { Fab as OldFab} from "@mui/material";

export default function Fab(props){
    return(
        <OldFab {...props}>
            {props.children}
        </OldFab>
    );
}