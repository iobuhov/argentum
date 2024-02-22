import { Checkbox } from "@xxx/argentum-ui/checkbox";
import { ReactElement, createElement } from "react";
import { CheckboxPreviewProps } from "../typings/CheckboxProps";


export function preview(_props: CheckboxPreviewProps): ReactElement {
    return <Checkbox label="Fun" useContainer={_props.useContainer} />;
}

