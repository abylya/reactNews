import Skeleton from "../../components/Skeleton/Skeleton";

function withSkeleton(Component, count, type) {
  return function WithSceleton(props) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count}></Skeleton>;
    }
    return <Component {...restProps}></Component>;
  };
}
export default withSkeleton;
