import { createElement } from "react";
import { Checkbox as RACheckbox } from "react-aria-components";

export function Checkbox(_props: {
    label: string;
    checked?: boolean;
    useContainer?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
    return (
        <RACheckbox>
            <div className="checkbox">
                <svg viewBox="0 0 18 18" aria-hidden="true">
                    <polyline points="1 9 7 14 15 4" />
                </svg>
            </div>
            Unsubscribe
        </RACheckbox>
    );
}

// function Container(
//     props: React.PropsWithChildren<{ asFragment: boolean }>
// ): React.ReactElement {
//     if (props.asFragment) {
//         return <Fragment>{props.children}</Fragment>;
//     }

//     return <div className="ag-FormGroup">{props.children}</div>;
// }
