import { ReactElement, createElement } from "react";
import { Checkbox, CheckboxIndicator } from "@xxx/argentum-ui/checkbox";

export interface HelloWorldSampleProps {
    sampleText?: string;
}

export function HelloWorldSample({ sampleText }: HelloWorldSampleProps): ReactElement {
    return (
        <div className="widget-hello-world">
            <Checkbox isIndeterminate>
                <CheckboxIndicator />
                Hello {sampleText}
            </Checkbox>
        </div>
    );
}
