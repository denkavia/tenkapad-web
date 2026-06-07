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
  onFocus: (blockId: string) => void,
  onBlur: (blockId: string) => void,
) {
  if (block.type === "tp-block-text") {
    return (
      <div className={`flex gap-2 items-center mb-4`} key={block.id}>
        <div className={`tp-block-control`}>#</div>
        <TpBlockText
          block={block}
          onChange={blockChangeHandler}
          blockId={block.id}
          onFocus={onFocus}
          onBlur={onBlur}
        ></TpBlockText>
      </div>
    );
  } else {
    return <div key={block.id}></div>;
  }
}
