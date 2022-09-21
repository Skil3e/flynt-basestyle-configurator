import { TColors, TColorsOptional } from "../types";

export const colorOptions = [
    "--color-brand",
    "--color-accent",
    "--color-accent-hover",
    "--color-accent-contrast",
    "--color-accent-alpha",
    "--color-background",
    "--color-bg-1",
    "--color-headline",
    "--color-text",
    "--color-border",
    "--color-border-alpha",
    "--color-error"
]

export const themeReset: TColors = {
    "--color-brand"          : "hsl(232, 74%, 52%)",
    "--color-accent"         : "hsl(232, 74%, 52%)",
    "--color-accent-hover"   : "hsl(232, 74%, 42%)",
    "--color-accent-contrast": "hsl(232 0% 100%)",
    "--color-accent-alpha"   : "hsla(232, 74%, 52%, 0.4)",
    "--color-background"     : "hsl(232, 0%, 100%)",
    "--color-bg-1"           : "hsl(232, 20%, 90%)",
    "--color-headline"       : "hsl(213, 33%, 6%)",
    "--color-text"           : "hsl(217, 11%, 29%)",
    "--color-border"         : "hsl(228, 16%, 40%)",
    "--color-border-alpha"   : "hsla(228, 16%, 40%, 0.15)",
    "--color-error"          : "hsl(343, 98%, 46%)",
}

export const themeLight: TColorsOptional = {
    "--color-background": "hsl(228, 56%, 98%)",
}

export const themeDark: TColorsOptional = {
    "--color-accent"         : "hsl(37, 100%, 69%)",
    "--color-accent-hover"   : "hsl(37, 100%, 59%)",
    "--color-accent-contrast": "hsl(227, 70%, 20%)",
    "--color-accent-alpha"   : "hsla(37, 100%, 69%, 0.4)",
    "--color-background"     : "hsl(227, 70%, 20%)",
    "--color-headline"       : "hsl(0, 0%, 100%)",
    "--color-text"           : "hsl(0, 0%, 100%)",
    "--color-border"         : "hsl(0, 0%, 100%)",
    "--color-border-alpha"   : "hsla(240, 7%, 92%, 0.1)"
}

export const themeHero: TColorsOptional = {
    "--color-accent"         : "hsl(37, 100%, 84%)",
    "--color-accent-hover"   : "hsl(37, 100%, 74%)",
    "--color-accent-contrast": "var(--color-brand)",
    "--color-accent-alpha"   : "hsla(37, 100%, 84%, 0.4)",
    "--color-background"     : "var(--color-brand)",
    "--color-headline"       : "hsl(0, 0%, 100%)",
    "--color-text"           : "hsl(0, 0%, 100%)",
    "--color-border"         : "hsl(0, 0%, 100%)",
    "--color-border-alpha"   : "hsla(240, 7%, 92%, 0.1)"
}

export const defaultThemes = [
    {
        name  : "reset",
        colors: themeReset
    },
    {
        name  : "light",
        colors: themeLight
    },
    {
        name  : "dark",
        colors: themeDark
    },
    {
        name  : "hero",
        colors: themeHero
    }

]
