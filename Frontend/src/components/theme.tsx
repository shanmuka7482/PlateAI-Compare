import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({

  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: "#f8f8f8" },
          100: { value: "#e8e8e8" },
          200: { value: "#d3d3d3" },
          300: { value: "#a3a3a3" },
          400: { value: "#737373" },
          500: { value: "#525252" },
          600: { value: "#404040" },
          700: { value: "#262626" },
          800: { value: "#171717" },
          900: { value: "#0a0a0a" },
          950: { value: "#030303" },
        },
        secondary: {
          50: { value: "#f8f8f8" },
          100: { value: "#e8e8e8" },
          200: { value: "#d3d3d3" },
          300: { value: "#a3a3a3" },
          400: { value: "#737373" },
          500: { value: "#525252" },
          600: { value: "#404040" },
          700: { value: "#262626" },
          800: { value: "#171717" },
          900: { value: "#0a0a0a" },
          950: { value: "#030303" },
        },
        accent: {
          50: { value: "#f8f8f8" },
          100: { value: "#e8e8e8" },
          200: { value: "#d3d3d3" },
          300: { value: "#a3a3a3" },
          400: { value: "#737373" },
          500: { value: "#525252" },
          600: { value: "#404040" },
          700: { value: "#262626" },
          800: { value: "#171717" },
          900: { value: "#0a0a0a" },
          950: { value: "#030303" },
        },
      },
      fonts: {
        heading: { value: "Space Grotesk" },
        body: { value: "Inter" },
        mono: { value: "JetBrains Mono" },
      },
    },
    semanticTokens: {
      colors: {
        neutral: {
          50: { value: "#f8f8f8" },
          100: { value: "#e8e8e8" },
          200: { value: "#d3d3d3" },
          300: { value: "#a3a3a3" },
          400: { value: "#737373" },
          500: { value: "#525252" },
          600: { value: "#404040" },
          700: { value: "#262626" },
          800: { value: "#171717" },
          900: { value: "#0a0a0a" },
          910: { value: "#232323" },
          950: { value: "#030303" },
        },
        primary: {
          50: { value: "#f8f8f8" },
          100: { value: "#e8e8e8" },
          200: { value: "#d3d3d3" },
          300: { value: "#a3a3a3" },
          400: { value: "#737373" },
          500: { value: "#525252" },
          600: { value: "#404040" },
          700: { value: "#262626" },
          800: { value: "#171717" },
          900: { value: "#0a0a0a" },
          950: { value: "#030303" },
        },
        secondary: {
          50: { value: "#f8f8f8" },
          100: { value: "#e8e8e8" },
          200: { value: "#d3d3d3" },
          300: { value: "#a3a3a3" },
          400: { value: "#737373" },
          500: { value: "#525252" },
          600: { value: "#404040" },
          700: { value: "#262626" },
          800: { value: "#171717" },
          900: { value: "#0a0a0a" },
          950: { value: "#030303" },
        },
        accent: {
          50: { value: "#f8f8f8" },
          100: { value: "#e8e8e8" },
          200: { value: "#d3d3d3" },
          300: { value: "#a3a3a3" },
          400: { value: "#737373" },
          500: { value: "#525252" },
          600: { value: "#404040" },
          700: { value: "#262626" },
          800: { value: "#171717" },
          900: { value: "#0a0a0a" },
          950: { value: "#030303" },
        },
        indigo: {
          50: { value: "#E8EAF6" },
          100: { value: "#C5CAE9" },
          200: { value: "#9FA8DA" },
          300: { value: "#7986CB" },
          400: { value: "#5C6BC0" },
          500: { value: "#3F51B5" },
          600: { value: "#3949AB" },
          700: { value: "#303F9F" },
          800: { value: "#283593" },
          900: { value: "#1A237E" },
          910: { value: "#4f46e5" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
