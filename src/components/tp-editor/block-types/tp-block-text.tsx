import {
  TpBlockInterface,
  TpBlockType,
} from "@/components/tp-editor/tp-block-type";
import React from "react";

export interface TpBlockTextInterface extends TpBlockInterface {
  props: PropsType;
}

type PropsType = {
  content: string;
};

export default function TpBlockText(props: {
  block: TpBlockType;
  onChange: (block: TpBlockType) => void;
  blockId: string;
}) {
  const { block, onChange } = props;

  const handleChanges = (e: React.InputEvent<HTMLDivElement>) => {
    e.preventDefault();
    return onChange({
      ...block,
      props: {
        ...block.props,
        content: e.currentTarget.textContent,
      },
    });
  };

  return (
    <div
      contentEditable={true}
      suppressContentEditableWarning={true}
      onInput={(e) => handleChanges(e)}
    >
      {block.props.content}
    </div>
  );
}
