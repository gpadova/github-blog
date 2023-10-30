type ThemeType = typeof colors;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export const colors = {
    blue: "#3294F8",
    base_title: "#E7EDF4",
    base_sub_title: "#C4D4E3",
    base_text: "#AFC2D4",
    base_spam: "#7B96B2",
    base_label: "#3A536B",
    base_border: "#1C2F41",
    base_post: "#112131",
    base_profile: "#0B1B2B",
    base_background: "#071422",
    base_input: "#040F1A",
}