const sh = require("shelljs");
let colors = [
    "amber",
    "blue",
    "bronze",
    "brown",
    "crimson",
    "gold",
    "grass",
    "gray",
    "green",
    "indigo",
    "iris",
    "jade",
    "lime",
    "mint",
    "orange",
    "pink",
    "plum",
    "purple",
    "red",
    "ruby",
    "sky",
    "teal",
    "tomato",
    "violet",
    "yellow",
    "mauve",
    "olive",
    "sage",
    "sand",
    "slate"
];

let accent = colors.slice(0, -5);
let gray = colors.slice(-5);

let format2 = (c) => `
.auk-accent-color-${c} {
    --color-surface-accent: var(--${c}-surface);

    --accent-1: var(--${c}-1);
    --accent-2: var(--${c}-2);
    --accent-3: var(--${c}-3);
    --accent-4: var(--${c}-4);
    --accent-5: var(--${c}-5);
    --accent-6: var(--${c}-6);
    --accent-7: var(--${c}-7);
    --accent-8: var(--${c}-8);
    --accent-9: var(--${c}-9);
    --accent-9-contrast: var(--${c}-9-contrast);
    --accent-10: var(--${c}-10);
    --accent-11: var(--${c}-11);
    --accent-12: var(--${c}-12);

    --accent-a1: var(--${c}-a1);
    --accent-a2: var(--${c}-a2);
    --accent-a3: var(--${c}-a3);
    --accent-a4: var(--${c}-a4);
    --accent-a5: var(--${c}-a5);
    --accent-a6: var(--${c}-a6);
    --accent-a7: var(--${c}-a7);
    --accent-a8: var(--${c}-a8);
    --accent-a9: var(--${c}-a9);
    --accent-a10: var(--${c}-a10);
    --accent-a11: var(--${c}-a11);
    --accent-a12: var(--${c}-a12);
}
`;
accent.forEach((c) => {
    new sh.ShellString(format2(c)).toEnd(`_accent-${c}.scss`);
});
