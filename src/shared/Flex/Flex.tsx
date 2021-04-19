type AlignItems =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "unset"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "self-end"
  | "self-start"
  | "start"
  | "baseline"
  | "normal"
  | "stretch";

type JustifyContent =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "unset"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "start"
  | "normal"
  | "stretch"
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "left"
  | "right";

type FlexDirection =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "unset"
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse";

interface IProps {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  direction?: FlexDirection;
  className?: string;
}

export const Flex: React.FC<IProps> = ({
  children,
  alignItems,
  justifyContent,
  direction,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        width: "100%",
        flexDirection: direction || "row",
        position: "relative",
        alignItems: alignItems || "initial",
        justifyContent: justifyContent || "initial",
      }}
    >
      {children}
    </div>
  );
};
