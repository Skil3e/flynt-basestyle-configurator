export type TColorVariables =
    "--color-brand"
    | "--color-error"
    | "--color-background"
    | "--color-bg-1"
    | "--color-headline"
    | "--color-text"
    | "--color-accent"
    | "--color-accent-alpha"
    | "--color-accent-hover"
    | "--color-accent-contrast"
    | "--color-border"
    | "--color-border-alpha"

export type TTypographyVariables =
    "--font-family-main"
    | "--line-height"
    | "--font-size-small"
    | "--font-size-h1"
    | "--font-size-h2"
    | "--font-size-h3"
    | "--font-size-h4"
    | "--font-size-h5"
    | "--font-size-h6"
    | "--heading-font-weight"
    | "--heading-line-height"
    | "--heading-margin-top"
    | "--heading-margin-bottom"
    | "--p-margin"
    | "--hr-margin"

export type TSizeVariables =
    "--size-xs"
    | "--size-sm"
    | "--size-base"
    | "--size-md"
    | "--size-lg"
    | "--size-xl"
    | "--size-2xl"
    | "--size-3xl"
    | "--size-huge"
    | "--size-content"
    | "--size-content-lg"
    | "--size-container";

export type TBreakPoints = "mobile" | "tablet" | "desktop";
export type TResponsiveVariables = "--box-padding" | "--container-padding" | "--component-spacing";

export type TColors = {
    [key in TColorVariables]: string
}
export type TColorsOptional = {
    [key in TColorVariables]?: string
}

export type TSizes = {
    [key in TSizeVariables]: string | number
}

export type TTypography = {
    [key in TTypographyVariables]: string | number
}

export type TResponsive = {
    [key in TBreakPoints]: {
        [key in TResponsiveVariables]: `var(${ TSizeVariables })`
    }
}
