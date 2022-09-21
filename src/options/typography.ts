import { TTypography } from "../types";

export const typographyVariables = [
    "--font-family-main",
    "--line-height",
    "--font-size-small",
    "--font-size-h1",
    "--font-size-h2",
    "--font-size-h3",
    "--font-size-h4",
    "--font-size-h5",
    "--font-size-h6",
    "--heading-font-weight",
    "--heading-line-height",
    "--heading-margin-top",
    "--heading-margin-bottom",
    "--p-margin",
    "--hr-margin"
]

const systemFonts = '"Montserrat", Verdana,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

export const typographyDefaults: TTypography = {
    "--font-family-main"     : systemFonts,
    "--line-height"          : 1.7,
    "--p-margin"             : 1.5 + "rem",
    "--hr-margin"            : 3 + "rem",
    "--heading-margin-top"   : 1.5 + "rem",
    "--heading-margin-bottom": 0.5 + "rem",
    "--heading-line-height"  : "calc(1em + 0.5rem)",
    "--heading-font-weight"  : 700,
    "--font-size-small"      : .95 + "rem",
    "--font-size-h1"         : 2.25 + "rem",
    "--font-size-h2"         : 1.5 + "rem",
    "--font-size-h3"         : 1.125 + "rem",
    "--font-size-h4"         : 1 + "rem",
    "--font-size-h5"         : 1.125 + "rem",
    "--font-size-h6"         : 1 + "rem",
}
