import styled, { css } from "styled-components";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = "sm" | "md" | "lg";
type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";
type AlignItems = "flex-start" | "center" | "flex-end";

const $justifyContent= ["flex-start", "flex-end", "center", "space-between"];
const $alignItems= ["flex-start", "flex-end", "center"];

const $breakpoints = {
  sm: "600px",
  md: "960px",
  lg: "1280px",
};

const $spacing = {
  sm: "8px",
  md: "16px",
  lg: "24px",
};

export interface GridProps {
  container?: boolean;
  item?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}

const breakpointMixin = (name: "sm" | "md" | "lg", content: any) => css`
  @media screen and (min-width: ${$breakpoints[name]}) {
    ${content}
  }
`;

const spacingMixin = (name: string, value: string) => css`
  &.Grid_spacing_${name} {
    margin: -${value};

    > .Grid_item {
      padding: ${value};
    }
  }
`;

const justifyContentMixin = (value: string) => css`
  &.Grid_justifyContent_${value} {
    justify-content: ${value};
  }
`;

const alignItemsMixin = (value: string) => css`
  &.Grid_alignItems_${value} {
    align-items: ${value};
  }
`;

const Grid = styled.div<GridProps>`
  &.Grid_container {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
  }

  &.Grid_item {
    display: block;
  }

  ${(props) =>
    Array.from({ length: 13 }).map(
      (_, i) => css`
        &.Grid_xs_${i + 1} {
          flex-basis: ${((i + 1) / 12) * 100}%;
        }
      `
    )}

  ${breakpointMixin(
    "sm",
    [...Array.from({ length: 13 })].map(
      (_, i) => css`
        &.Grid_sm_${i + 1} {
          flex-basis: ${((i + 1) / 12) * 100}%;
        }
      `
    )
  )}

  ${breakpointMixin(
    "md",
    [...Array.from({ length: 13 })].map(
      (_, i) => css`
        &.Grid_md_${i + 1} {
          flex-basis: ${((i + 1) / 12) * 100}%;
        }
      `
    )
  )}

  ${breakpointMixin(
    "lg",
    [...Array.from({ length: 13 })].map(
      (_, i) => css`
        &.Grid_lg_${i + 1} {
          flex-basis: ${((i + 1) / 12) * 100}%;
        }
      `
    )
  )}

  ${Object.entries($spacing).map(([name, value]) => spacingMixin(name, value))}
  ${$justifyContent.map((value) => justifyContentMixin(value))}
  ${$alignItems.map((value) => alignItemsMixin(value))}
`;

export default Grid;
