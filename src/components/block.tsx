import React from "react";

export type BlockProps = {
  type?: "text";
  content: string | null;
  children?: React.ReactNode[];
};

const renderBlock = (props: BlockProps) => {
  if (props.type === "text") {
    return (
      <div
        contentEditable={"true"}
        suppressContentEditableWarning={true}
        className={`outline-none ring-0`}
      >
        {props.content}
      </div>
    );
  }
};

export default function Block(props: BlockProps) {
  return (
    <div className={`block-wrapper flex justify-between gap-1 items-center`}>
      <div className={`drag-handle`}>#</div>
      <div className={`block-content`}>{renderBlock(props)}</div>
    </div>
  );
}
