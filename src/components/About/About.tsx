import { FunctionComponent } from "react";
import { Card, CardParagraph, CardTitle } from "@/css";

export const About: FunctionComponent = () => {
  return (
    <Card>
      <CardTitle>About me</CardTitle>
      <CardParagraph>
        As a frontend developer with more than 4 years of experience working with React and
        TypeScript, and some backend skills using Node.js, I enjoy creating digital products
        that provide a great user experience, consistency, and follow best practices. I believe
        in writing clean and efficient code that&apos;s easy to maintain and scale. I am always
        willing to learn and stay up-to-date with the latest trends and technologies.
      </CardParagraph>
      <CardParagraph>I have European citizenship</CardParagraph>
    </Card>
  );
};
