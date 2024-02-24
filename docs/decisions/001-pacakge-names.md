# Package names

Date: 2024-02-24
Status: accepted

## Context

As Mendix and Studio Pro rely on some naming patterns it's better if we establish them in the beginning.

## Decision

For this packages we about to use next names and conventions:

### Widgets

| Field                                | Value/Pattern                                    |
| ------------------------------------ | ------------------------------------------------ |
| scope                                | @mendix                                          |
| package.json/packagePath (ID prefix) | com.mendix.argentumuikit                         |
| package.json/name                    | @mendix/argentumuikit-\<widget name\>[dash-case] |
| pacakge.json/widgetName              | \<widget name\>[PascalCase]                      |
| \<widget name\>.xml/name             | <widget name\>[Sentence case]                    |

Examples:

```json
// package.json
{
  "name": "@mendix/argentumuikit-checkbox-group",
  "widgetName": "CheckboxGroup"
  "packagePath": "com.mendix.argentumuikit",
}
```

```xml
<!-- CheckboxGroup.xml -->
<widget>
  <name>Check box group</name>
</widget>
```

### Styles

All class names should start with `.auk-` prefix (stands from `A`rgentum `U`I `K`it).

Example: `.auk-Checkbox`

### Mendix modules

| Marketplace           | Name in Studio Pro    | Project (mpr name)    | Description                               |
| --------------------- | --------------------- | --------------------- | ----------------------------------------- |
| Argentum theme Radian | Argentum_theme_Radian | Argentum_theme_Radian | Theme files and Design tokens for UI Kit. |
| Argentum UI Kit       | Argentum_UI_Kit       | Argentum_UI_Kit       | Widgets and base SCSS.                    |

### Starter apps

| Marketplace        | Project (mpr name) | Description                                                                                         |
| ------------------ | ------------------ | --------------------------------------------------------------------------------------------------- |
| Argentum Blank Web | Argentum_Blank_Web | Starter template. Should include UI Kit and theme. Also should include other modules (Data Widgets) |

##

## Consequences

This pattern is highly inspired by Atlas. We hope that this will make it more simple
