import * as React from "react";
import { createElement } from "react";
import type { Preview } from "@storybook/react";
import "./preview.scss";

const colorDot = (color) => (
    <span
        style={{
            background: color,
            display: "block",
            width: "1em",
            height: "1em",
            borderRadius: 9999
        }}
    />
);

const grayColors = [
    { value: "mauve", title: "mauve" },
    { value: "olive", title: "olive" },
    { value: "sage", title: "sage" },
    { value: "sand", title: "sand" },
    { value: "slate", title: "slate" }
];

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
        },
        accent: {
            description: "Global accent color",
            defaultValue: "ruby",
            toolbar: {
                items: [
                    // {
                    //     title: "amber",
                    //     value: "amber"
                    // },
                    { value: "blue", title: "blue" },
                    // { value: "bronze", title: "bronze" },
                    // { value: "brown", title: "brown" },
                    // { value: "crimson", title: "crimson" },
                    // { value: "gold", title: "gold" },
                    // { value: "grass", title: "grass" },
                    { value: "gray", title: "gray" },
                    { value: "green", title: "green" },
                    { value: "indigo", title: "indigo" },
                    // { value: "iris", title: "iris" },
                    // {
                    //     value: "jade",
                    //     title: "jade",
                    //     right: colorDot("#29a383")
                    // }
                    // { value: "lime", title: "lime" },
                    // { value: "mint", title: "mint" },
                    // { value: "orange", title: "orange" },
                    // { value: "pink", title: "pink" },
                    // { value: "plum", title: "plum" },
                    // { value: "purple", title: "purple" },
                    // { value: "red", title: "red" },
                    { value: "ruby", title: "ruby" }
                    // { value: "sky", title: "sky" },
                    // { value: "teal", title: "teal" },
                    // { value: "tomato", title: "tomato" },
                    // { value: "violet", title: "violet" },
                    // { value: "yellow", title: "yellow" }
                ],
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
            const accent = context.globals.accent as string;
            return (
                <div className="mx-page">
                    <div className="mx-placeholder">
                        <div
                            className={`auk-viewport auk-accent-color auk-${accent} argentum-theme-radix ${
                                schema === "dark" ? "dark" : "light"
                            }`}
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
