export const CustomButton = ({
  name,
  className,
  backgroundColor
}: {
  name: string;
  className: string | undefined;
  backgroundColor?: string;
}) => {
  return <button style={{backgroundColor}} className={className}>{name}</button>;
};
