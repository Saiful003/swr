import useDrawer from "../hooks/useDrawer";
import useModal from "../hooks/useModal";

interface IProps {
  active?: boolean;
}

function OverLay({ active }: IProps) {
  const { closeDrawer, isOpenDrawer } = useDrawer();
  const { closeModal } = useModal();
  return (
    <div
      onClick={isOpenDrawer ? closeDrawer : closeModal}
      className={`fixed inset-0 bg-black opacity-0 pointer-events-none  ${
        isOpenDrawer && "opacity-50 pointer-events-auto md:opacity-0"
      } ${active && "opacity-50 pointer-events-auto"} `}
    ></div>
  );
}

export default OverLay;
