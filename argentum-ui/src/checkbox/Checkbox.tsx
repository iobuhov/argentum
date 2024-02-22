import { createElement, Fragment } from "react";

export function Checkbox(props: {
    label: string;
    checked?: boolean;
    useContainer?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
    return (
        <Container asFragment={!props.useContainer}>
            <input
                id="cbxx"
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
            />
            <label htmlFor="cbxx" className="ag-CheckboxRoot">
                {props.label}
            </label>
        </Container>
    );
}

function Container(
    props: React.PropsWithChildren<{ asFragment: boolean }>
): React.ReactElement {
    if (props.asFragment) {
        return <Fragment>{props.children}</Fragment>;
    }

    return <div className="ag-FormGroup">{props.children}</div>;
}
