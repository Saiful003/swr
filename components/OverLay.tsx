import { useModal } from "../features/modalSlice";
import { useAppDispatch } from "../hooks/redux-hooks/tsVersionHooks";

interface IProps {
  active?: boolean;
}

function OverLay({ active }: IProps) {
  const { closeModal } = useModal();
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(closeModal())}
      className={`fixed z-40 inset-0 bg-black opacity-0 pointer-events-none   ${
        active && "opacity-50 pointer-events-auto"
      } `}
    ></div>
  );
}

export default OverLay;
