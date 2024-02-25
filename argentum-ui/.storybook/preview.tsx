import * as React from "react";
import { createElement } from "react";
import type { Preview } from "@storybook/react";
import "./preview.scss";

const preview: Preview = {
    globalTypes: {
        colorSchema: {
            description: "Global color schema",
            defaultValue: "light",
            toolbar: {
                items: [
                    {
                        value: "light",
                        title: "Light mode"
                    },
                    { value: "dark", title: "Dark mode" }
                ],
                //Change title based on selected value
                dynamicTitle: true
            }
        }
    },
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },

    decorators: [
        (Story, context) => {
            const schema = context.globals.colorSchema as string;
            return (
                <div className="mx-page">
                    <div className="mx-placeholder">
                        <div
                            className={`auk-viewport auk-radius-small argentum-theme-radix ${schema === "dark" ? "dark" : "light"}`}
                        >
                            <div className="storybackdrop" />
                            <Story />
                        </div>
                    </div>
                </div>
            );
        }
    ]
};

export default preview;
