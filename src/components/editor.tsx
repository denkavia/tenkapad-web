"use client";

import Block, { BlockProps } from "@/components/block";
import React, { useEffect, useState } from "react";

export default function Editor() {
  const [blocks, setBlocks] = useState<BlockProps[]>([
    { uid: "initial-id", content: "Write here...", type: "text" },
  ]);

  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);

  const addNewBlock = () => {
    const uid = crypto.randomUUID();

    setBlocks((prev) => [
      ...prev,
      {
        uid,
        content: "",
        type: "text",
      },
    ]);

    setActiveBlockId(uid);
  };

  useEffect(() => {
    if (activeBlockId) {
      const targetElement = document.getElementById(activeBlockId);

      if (targetElement) {
        targetElement.focus();
      }
    }
  }, [activeBlockId, blocks]);

  const keydownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewBlock();
    }
  };

  return (
    <div className={`w-full border-2 p-4`}>
      <div id={`block-area`}>
        {blocks.map((block) => (
          <Block
            key={block.uid}
            uid={block.uid}
            content={block.content}
            type={block.type}
            childs={block.childs ?? []}
            keydownHandler={keydownHandler}
          />
        ))}
      </div>
    </div>
  );
}
