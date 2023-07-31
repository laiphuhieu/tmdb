import React from "react";

import { ReactComponent as SearchBtn } from "../../assets/images/search.svg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchResult = (props: any): any => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const boxes = props.movies?.map((result: any, index: any) => {
    return <Box key={index} title={result.title} />;
  });
  return <div>{boxes}</div>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Box = (props: any) => {
  return (
    <ul>
      <li className="text-[18px]">
        <div className="flex w-[100%] justify-center pt-[4px] pb-[5px] border-solid border-grey border-b-[1px]">
          <div className="flex w-[100%] items-center text[16.2px] px-[40px]">
            <div>
              <SearchBtn className="w-[20px] h-[20px] mr-[6px]" />
            </div>
            <p>
              <span title={props.title} className="text-black">
                {props.title}
              </span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SearchResult;
