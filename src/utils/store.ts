import create from 'zustand'
import { defaultThemes } from "../options/themes";
import { TColorsOptional, TResponsive, TSizes, TTypography } from "../types";
import { typographyDefaults } from "../options/typography";
import { defaultResponsiveSizes, defaultSizes } from "../options/sizes";
import { getFormattedData } from "./utils";

type ThemeArray = Array<{ name: string, colors: TColorsOptional }>

export type TSettings = {
    typography: TTypography
    sizes: TSizes
    responsive: TResponsive
    themes: ThemeArray
}

type TStore = TSettings & ({
    updateTypography: ( typography: TTypography ) => void
    updateSizes: ( sizes: TSizes ) => void
    updateResponsive: ( sizes: TResponsive ) => void
    updateThemes: ( themes: ThemeArray ) => void
    getFormattedDataFromStore: ( app?: boolean ) => string
    initLocalStorage: () => void
    clearLocalStorage: () => void
})

export const useSettingsStore = create<TStore>( ( set, get ) => ({
    themes    : defaultThemes,
    typography: typographyDefaults,
    sizes     : defaultSizes,
    responsive: defaultResponsiveSizes,
    initLocalStorage() {
        const localThemes = localStorage.getItem( "themes" )
        const localTypography = localStorage.getItem( "typography" )
        const localSizes = localStorage.getItem( "sizes" )
        const localResponsive = localStorage.getItem( "responsive" )
        set( () => ({
            themes    : localThemes ? JSON.parse( localThemes ) : defaultThemes,
            typography: localTypography ? JSON.parse( localTypography ) : typographyDefaults,
            sizes     : localSizes ? JSON.parse( localSizes ) : defaultSizes,
            responsive: localResponsive ? JSON.parse( localResponsive ) : defaultResponsiveSizes
        }) )
    },
    clearLocalStorage() {
        localStorage.removeItem( "themes" )
        localStorage.removeItem( "typography" )
        localStorage.removeItem( "sizes" )
        localStorage.removeItem( "responsive" )
        set( () => ({
            themes    : defaultThemes,
            typography: typographyDefaults,
            sizes     : defaultSizes,
            responsive: defaultResponsiveSizes
        }) )
    },
    updateThemes( themes ) {
        set( () => ({
            themes: [ ...themes ]
        }) )
        localStorage.setItem( "themes", JSON.stringify( themes ) )
    },
    updateSizes( sizes ) {
        set( () => ({
            sizes: { ...sizes }
        }) )
        localStorage.setItem( "sizes", JSON.stringify( sizes ) )
    },
    updateResponsive( sizes ) {
        set( () => ({
            responsive: { ...sizes }
        }) )
        localStorage.setItem( "responsive", JSON.stringify( sizes ) )
    },
    updateTypography( typography ) {
        set( () => ({
            typography: { ...typography }
        }) )
        localStorage.setItem( "typography", JSON.stringify( typography ) )
    },
    getFormattedDataFromStore( app ) {
        return getFormattedData( get(), app )
    }
}) )
