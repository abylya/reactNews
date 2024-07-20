import Skeleton from "../../components/Skeleton/Skeleton";

interface Prop{
  isLoading:boolean;
}

function withSkeleton<P extends object>(Component:React.ComponentType<P>, count?:number, direction?:string) {
  return function WithSceleton(props:Prop) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton count={count} direction={direction}></Skeleton>;
    }
    return <Component {...(restProps as P)}></Component>;
  };
}
export default withSkeleton;
