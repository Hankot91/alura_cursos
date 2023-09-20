import {
    bgLight,
    contentLight,
    textBglight,
    bgDark,
    contentDark,
    textBgDark
} from "./variables";

export const themeLight = {
    body: bgLight,
    inside: contentLight,
    text: textBglight,
    filter: ""
}

export const themeDark = {
    body: bgDark,
    inside: contentDark,
    text: textBgDark,
    filter: "invert(100%)"
}