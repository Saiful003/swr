import classNames from "classnames";
interface IProps {
  hiddenInMobile?: boolean;
}

function Divider({ hiddenInMobile }: IProps) {
  return (
    <hr
      className={classNames(" w-11 mx-auto lg:w-full", {
        " hidden lg:block": hiddenInMobile,
      })}
    />
  );
}

export default Divider;
