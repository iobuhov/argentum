import { createElement, ReactElement } from "react";

export function CheckboxIndicator({
    className = "auk-CheckboxIndicator"
}: {
    className?: string;
}): ReactElement {
    return (
        <div className={className}>
            <svg viewBox="0 0 18 18" aria-hidden="true">
                <rect x={1} y={7.5} width={15} height={3} />
                <polyline points="1 9 7 14 15 4" />
            </svg>
        </div>
    );
}
