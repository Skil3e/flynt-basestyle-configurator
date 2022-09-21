import { TResponsive, TSizes } from "../types";

export const defaultSizes: TSizes = {
    "--size-xs"        : "0.5rem",
    "--size-sm"        : "0.75rem",
    "--size-base"      : "1rem",
    "--size-md"        : "1.25rem",
    "--size-lg"        : "1.5rem",
    "--size-xl"        : "2rem",
    "--size-2xl"       : "3rem",
    "--size-3xl"       : "6rem",
    "--size-huge"      : "8rem",
    "--size-content"   : "60ch",
    "--size-content-lg": "80ch",
    "--size-container" : "1440px",
}

export const defaultResponsiveSizes: TResponsive = {
    mobile : {
        "--box-padding"      : "var(--size-base)",
        "--container-padding": "var(--size-base)",
        "--component-spacing": "var(--size-2xl)",
    },
    tablet : {
        "--box-padding"      : "var(--size-lg)",
        "--container-padding": "var(--size-lg)",
        "--component-spacing": "var(--size-3xl)",
    },
    desktop: {
        "--box-padding"      : "var(--size-xl)",
        "--container-padding": "var(--size-2xl)",
        "--component-spacing": "var(--size-3xl)",
    }
}
