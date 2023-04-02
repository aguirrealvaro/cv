import { FunctionComponent } from "react";
import NextHead from "next/head";

type HeadProps = {
  title?: string;
};

export const Head: FunctionComponent<HeadProps> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
};
