interface IProps {
  listName: string;
}

function List({ listName }: IProps) {
  return (
    <li className="border-b py-2 pl-2 cursor-pointer last:m-0 last:border-b-0">
      {listName}
    </li>
  );
}

export default List;
