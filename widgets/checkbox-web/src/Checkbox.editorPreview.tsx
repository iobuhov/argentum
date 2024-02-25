import { Checkbox, CheckboxIndicator } from "@xxx/argentum-ui/checkbox";
import { ReactElement, createElement } from "react";
import { CheckboxPreviewProps } from "../typings/CheckboxProps";


export function preview(props: CheckboxPreviewProps): ReactElement {
    return (
        <Checkbox isSelected={false} className={props.class}><CheckboxIndicator />{props.label}</Checkbox>
    )
}

