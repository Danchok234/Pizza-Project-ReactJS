import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props: any) => (
  <ContentLoader
    className={"pizza-block"}
    speed={2}
    width={280}
    height={436}
    viewBox="0 0 280 436"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="120" r="120" />
    <rect x="0" y="252" rx="13" ry="13" width="280" height="27" />
    <rect x="1" y="292" rx="14" ry="14" width="280" height="88" />
    <rect x="2" y="402" rx="9" ry="9" width="90" height="27" />
    <rect x="128" y="392" rx="23" ry="23" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
