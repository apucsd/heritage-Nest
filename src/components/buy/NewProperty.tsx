"use client";
import Link from "next/link";

import Slider from "./Slider";
import { useGetAllPropertyQuery } from "@/redux/api/propertyApi";

const NewProperty = () => {
  const { data, isFetching } = useGetAllPropertyQuery({});
  if (isFetching) {
    return <p>Loading...</p>;
  }
  return (
    <div className="my-10 mx-20 ">
      <div className="flex justify-between gap-1 items-center my-5">
        <h1 className="text-2xl md:text-4xl font-semibold  my-3 text-nowrap">
          New Listed Properties
        </h1>

        <Link className="text-primary underline" href="/buy">
          See all property
        </Link>
      </div>
      <Slider data={data} />
    </div>
  );
};

export default NewProperty;
