export interface IProps {
  color?: string;
  width?: number;
  height?: number;
}
export const HamburguerIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      height={props.height || 24}
      viewBox="0 -53 384 384"
      width={props.width || 24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0" />
    </svg>
  );
};
