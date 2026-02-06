// src/utils/cn.ts
import { extendTailwindMerge } from "tailwind-merge";
var extendedTailwindMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      rounded: [
        "rounded-full-var"
      ],
      shadow: [
        "shadow-elevation-0",
        "shadow-elevation-1",
        "shadow-elevation-2",
        "shadow-elevation-3",
        "shadow-elevation-4",
        "shadow-elevation-5"
      ],
      typescale: [
        "typescale-display-large",
        "typescale-display-medium",
        "typescale-display-small",
        "typescale-headline-large",
        "typescale-headline-medium",
        "typescale-headline-small",
        "typescale-title-large",
        "typescale-title-medium",
        "typescale-title-small",
        "typescale-body-large",
        "typescale-body-medium",
        "typescale-body-small",
        "typescale-label-large",
        "typescale-label-medium",
        "typescale-label-small",
        "typescale-emphasized-display-large",
        "typescale-emphasized-display-medium",
        "typescale-emphasized-display-small",
        "typescale-emphasized-headline-large",
        "typescale-emphasized-headline-medium",
        "typescale-emphasized-headline-small",
        "typescale-emphasized-title-large",
        "typescale-emphasized-title-medium",
        "typescale-emphasized-title-small",
        "typescale-emphasized-body-large",
        "typescale-emphasized-body-medium",
        "typescale-emphasized-body-small",
        "typescale-emphasized-label-large",
        "typescale-emphasized-label-medium",
        "typescale-emphasized-label-small"
      ]
    }
  }
});
function cn(...classLists) {
  return extendedTailwindMerge(classLists);
}

// src/types.ts
var BG_SYSTEM_COLOR_MAP = {
  "primary": "bg-primary",
  "on-primary": "bg-on-primary",
  "primary-container": "bg-primary-container",
  "on-primary-container": "bg-on-primary-container",
  "secondary": "bg-secondary",
  "on-secondary": "bg-on-secondary",
  "secondary-container": "bg-secondary-container",
  "on-secondary-container": "bg-on-secondary-container",
  "tertiary": "bg-tertiary",
  "on-tertiary": "bg-on-tertiary",
  "tertiary-container": "bg-tertiary-container",
  "on-tertiary-container": "bg-on-tertiary-container",
  "error": "bg-error",
  "on-error": "bg-on-error",
  "error-container": "bg-error-container",
  "on-error-container": "bg-on-error-container",
  "primary-fixed": "bg-primary-fixed",
  "primary-fixed-dim": "bg-primary-fixed-dim",
  "on-primary-fixed": "bg-on-primary-fixed",
  "on-primary-fixed-variant": "bg-on-primary-fixed-variant",
  "secondary-fixed": "bg-secondary-fixed",
  "secondary-fixed-dim": "bg-secondary-fixed-dim",
  "on-secondary-fixed": "bg-on-secondary-fixed",
  "on-secondary-fixed-variant": "bg-on-secondary-fixed-variant",
  "tertiary-fixed": "bg-tertiary-fixed",
  "tertiary-fixed-dim": "bg-tertiary-fixed-dim",
  "on-tertiary-fixed": "bg-on-tertiary-fixed",
  "on-tertiary-fixed-variant": "bg-on-tertiary-fixed-variant",
  "surface-dim": "bg-surface-dim",
  "surface": "bg-surface",
  "surface-bright": "bg-surface-bright",
  "surface-container-lowest": "bg-surface-container-lowest",
  "surface-container-low": "bg-surface-container-low",
  "surface-container": "bg-surface-container",
  "surface-container-high": "bg-surface-container-high",
  "surface-container-highest": "bg-surface-container-highest",
  "on-surface": "bg-on-surface",
  "on-surface-variant": "bg-on-surface-variant",
  "outline": "bg-outline",
  "outline-variant": "bg-outline-variant",
  "inverse-surface": "bg-inverse-surface",
  "inverse-on-surface": "bg-inverse-on-surface",
  "inverse-primary": "bg-inverse-primary",
  "scrim": "bg-scrim",
  "shadow": "bg-shadow"
};

// src/components/StatefulContainer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function StatefulContainer({
  ref,
  className,
  stateLayerColor,
  selected,
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      ref,
      "data-selected": selected,
      disabled,
      className: cn(
        `relative overflow-clip disabled:opacity-38`,
        // TODO: opacity가 border에도 영향을 미치는 것 같음
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `
                    absolute inset-0 size-full ${stateLayerColor ? BG_SYSTEM_COLOR_MAP[stateLayerColor] : ""}
                    opacity-0
                    hover:opacity-8
                    active:opacity-10
                `
          }
        ),
        children
      ]
    }
  );
}

// src/components/Button.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Button({
  ref,
  className,
  size = "sm",
  shape = "round",
  variant = "filled",
  selected = false,
  disabled = false,
  children,
  ...props
}) {
  const sizeStyles = {
    xs: `h-var-[32px] px-[12px] rounded-md typescale-label-large active:rounded-sm`,
    sm: `h-var-[40px] px-[16px] rounded-md typescale-label-large active:rounded-sm`,
    md: `h-var-[56px] px-[24px] rounded-lg typescale-title-medium active:rounded-md`,
    lg: `h-var-[96px] px-[48px] rounded-xl typescale-headline-small active:rounded-lg`,
    xl: `h-var-[136px] px-[64px] rounded-xl typescale-headline-large active:rounded-lg`
  };
  const variantStyles = {
    elevated: `
            bg-surface-container-low text-primary shadow-elevation-1
            selected:bg-primary selected:text-on-primary
        `,
    filled: `
            bg-primary text-on-primary
            selected:bg-primary selected:text-on-primary
        `,
    tonal: `
            bg-secondary-container text-on-secondary-container
            selected:bg-secondary selected:text-on-secondary
        `,
    outlined: `
            border border-outline-variant text-on-surface-variant
            selected:bg-inverse-surface selected:text-inverse-on-surface
        `,
    text: `text-primary`
  };
  const variantStateLayerColors = {
    elevated: "primary",
    filled: "on-primary",
    tonal: "on-secondary-container",
    outlined: "on-surface-variant",
    text: "primary"
  };
  return /* @__PURE__ */ jsx2(
    StatefulContainer,
    {
      ref,
      className: cn(
        `cursor-pointer transition-all duration-100 ease-out`,
        sizeStyles[size],
        shape === "round" ? "rounded-full-var" : "",
        variantStyles[variant],
        className
      ),
      stateLayerColor: variantStateLayerColors[variant],
      selected,
      disabled,
      ...props,
      children
    }
  );
}

// src/components/ButtonGroup.tsx
import { createContext } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var ButtonGroupContext = createContext(null);
function ButtonGroup({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      className: "",
      ...props,
      children
    }
  );
}

// src/components/Card.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Card({
  className,
  variant = "elevated",
  disabled = false,
  children,
  ...props
}) {
  const variantStyles = {
    elevated: `
            bg-surface-container-low z-10 shadow-elevation-1 
            hover:z-11 hover:shadow-elevation-2
            disabled:bg-surface
        `,
    filled: `
            bg-surface-container-highest
        `,
    outlined: `
            bg-surface border border-outline-variant
            disabled:border-outline/12
        `
  };
  return /* @__PURE__ */ jsx4(
    StatefulContainer,
    {
      className: cn(
        "rounded-md text-on-surface",
        variantStyles[variant],
        className
      ),
      stateLayerColor: "on-surface",
      disabled,
      ...props,
      children
    }
  );
}

// src/components/FAB.tsx
import { twMerge } from "tailwind-merge";
import { jsx as jsx5 } from "react/jsx-runtime";
function FAB({
  className,
  variant,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    "button",
    {
      ...props,
      className: twMerge(
        "size-[56px] rounded-[20px]",
        "bg-primary-container text-on-primary-container",
        "flex justify-center items-center",
        className
      ),
      children
    }
  );
}

// src/components/IconButton.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function IconButton({
  ref,
  className,
  size = "sm",
  shape = "round",
  width = "default",
  variant = "filled",
  selected,
  disabled = false,
  children,
  ...props
}) {
  const isToggleButton = typeof selected === "boolean";
  const sizeStyles = {
    xs: `h-var-[32px] rounded-md text-[20px] active:rounded-sm`,
    sm: `h-var-[40px] rounded-md text-[24px] active:rounded-sm`,
    md: `h-var-[56px] rounded-lg text-[24px] active:rounded-md`,
    lg: `h-var-[96px] rounded-xl text-[32px] active:rounded-lg`,
    xl: `h-var-[136px] rounded-xl text-[40px] active:rounded-lg`
  };
  const widthStylesBySize = {
    xs: {
      default: "w-[32px]",
      narrow: "w-[28px]",
      wide: "w-[40px]"
    },
    sm: {
      default: "w-[40px]",
      narrow: "w-[32px]",
      wide: "w-[52px]"
    },
    md: {
      default: "w-[56px]",
      narrow: "w-[48px]",
      wide: "w-[72px]"
    },
    lg: {
      default: "w-[96px]",
      narrow: "w-[64px]",
      wide: "w-[128px]"
    },
    xl: {
      default: "w-[136px]",
      narrow: "w-[104px]",
      wide: "w-[184px]"
    }
  };
  const variantStyles = {
    filled: isToggleButton ? `bg-surface-container text-on-surface-variant selected:bg-primary selected:text-on-primary` : `bg-primary text-on-primary`,
    tonal: isToggleButton ? `bg-secondary-container text-on-secondary-container selected:bg-secondary selected:text-on-secondary` : `bg-secondary-container text-on-secondary-container`,
    outlined: cn(
      `border`,
      isToggleButton ? `border-outline-variant text-on-surface-variant selected:bg-inverse-surface selected:text-inverse-on-surface` : `border-outline-variant text-on-surface-variant`
    ),
    standard: isToggleButton ? `text-on-surface-variant selected:text-primary` : `text-on-surface-variant`
  };
  const variantStateLayerColors = {
    filled: isToggleButton && !selected ? `on-surface-variant` : `on-primary`,
    tonal: isToggleButton && selected ? `on-secondary` : `on-secondary-container`,
    outlined: isToggleButton && selected ? `inverse-on-surface` : `on-surface-variant`,
    standard: isToggleButton && selected ? `primary` : `on-surface-variant`
  };
  return /* @__PURE__ */ jsx6(
    StatefulContainer,
    {
      ref,
      className: cn(
        `flex justify-center items-center cursor-pointer transition-all duration-100 ease-out`,
        sizeStyles[size],
        shape === "round" ? "rounded-full-var" : "",
        widthStylesBySize[size][width],
        variantStyles[variant],
        className
      ),
      stateLayerColor: variantStateLayerColors[variant],
      selected,
      disabled,
      ...props,
      children: /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined select-none", children })
    }
  );
}
export {
  BG_SYSTEM_COLOR_MAP,
  Button,
  ButtonGroup,
  ButtonGroupContext,
  Card,
  FAB,
  IconButton,
  StatefulContainer,
  cn
};
