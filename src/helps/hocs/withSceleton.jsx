import Skeleton from "../../components/Skeleton/Skeleton";

function withSkeleton(Component, count, direction = "colum") {
  return function WithSceleton(props) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton count={count} direction={direction}></Skeleton>;
    }
    return <Component {...restProps}></Component>;
  };
}
export default withSkeleton;
