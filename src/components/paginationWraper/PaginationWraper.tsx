import { PaginationProps } from "../interfeces";
import Pagination from "../pagination/Pagination";

interface Props{
  top?:boolean;
  bottom?:boolean;
  children:React.ReactNode;
}
export default function PginationWraper({
  top,
  bottom,
  children,
  ...paginationProps
}:Props&PaginationProps) {
  return (
    <>
      {top && <Pagination {...paginationProps}></Pagination>}
      {children}
      {bottom && <Pagination {...paginationProps}></Pagination>}
    </>
  );
}
