import { ThemeCustomizer } from "../compoenents/theme-customizer/";

export const Themes = () => {
    return (
        <>
            <div class={ "themes centerCenterMaxWidth componentSpacing" }>
                <div class={ "centerContentMaxWidth" }>
                    <h1>3.0 Themes</h1>
                </div>
            </div>
            <ThemeCustomizer/>
        </>
    )
}
