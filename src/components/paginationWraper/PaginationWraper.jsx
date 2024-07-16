import Pagination from "../pagination/Pagination";

export default function PginationWraper({
  top,
  bottom,
  children,
  ...paginationProps
}) {
  return (
    <>
      {top && <Pagination {...paginationProps}></Pagination>}
      {children}
      {bottom && <Pagination {...paginationProps}></Pagination>}
    </>
  );
}
