import { Grid as OldGrid} from "@mui/material";

export default function Grid(props){
    return(
        <OldGrid {...props}>
            {props.children}
        </OldGrid>
    )
}