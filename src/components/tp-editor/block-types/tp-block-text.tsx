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
  onFocus: (blockId: string) => void;
  onBlur: (blockId: string) => void;
  blockId: string;
}) {
  const { block, onChange, onFocus, onBlur } = props;

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
      onFocus={() => onFocus(block.id)}
      onBlur={() => onBlur(block.id)}
      id={block.id}
    >
      {block.props.content}
    </div>
  );
}
