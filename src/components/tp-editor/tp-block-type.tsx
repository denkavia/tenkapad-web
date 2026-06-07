import TpBlockText, {
  TpBlockTextInterface,
} from "@/components/tp-editor/block-types/tp-block-text";

export type TpBlockType = TpBlockTextInterface;

export interface TpBlockInterface {
  id: string;
  type: string;
  children: TpBlockType[];
}

export function renderTpBlock(
  block: TpBlockType,
  blockChangeHandler: (block: TpBlockType) => void,
) {
  if (block.type === "tp-block-text") {
    return (
      <TpBlockText
        block={block}
        key={block.id}
        onChange={blockChangeHandler}
        blockId={block.id}
      ></TpBlockText>
    );
  } else {
    return <div key={block.id}></div>;
  }
}
