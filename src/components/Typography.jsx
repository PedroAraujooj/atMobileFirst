import {Typography as OldTypography} from '@mui/material';

const Typography = (props) => {
    return  <OldTypography {...props}>
                {props.children}
            </OldTypography>
}

export default Typography;