import Block from "@/components/block";

const lipsum = [
  `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus
          quam, dapibus eget massa vitae, molestie condimentum nisl. Phasellus
          dignissim tortor vulputate metus pellentesque dignissim. Phasellus
          augue sapien, semper id metus vitae, fringilla imperdiet arcu. Integer
          est justo, mollis eu euismod vitae, tincidunt quis nibh. Aliquam
          lacinia in nunc id vulputate. Proin fringilla lacus sem, non aliquet
          quam consequat a. Donec vestibulum augue at sem vehicula commodo.
          Maecenas placerat ut lorem et sollicitudin. Cras eget elementum risus,
          at rhoncus risus.`,
  `
          Quisque vel erat sed enim bibendum dapibus. Curabitur bibendum at
          lorem quis rhoncus. Nullam ullamcorper varius tortor, eu consectetur
          dolor faucibus sollicitudin. Duis molestie lacus sit amet augue
          bibendum, in suscipit turpis luctus. In justo diam, blandit in justo
          eget, cursus congue orci. Maecenas tempus placerat ultrices. Curabitur
          nec velit arcu.`,
  `
          Nunc eu molestie dolor. Curabitur at diam ut justo efficitur tempor.
          Etiam ullamcorper tincidunt dignissim. Sed eget libero augue. Etiam
          non sem augue. In id orci scelerisque, viverra orci eget, sagittis
          nibh. Morbi a imperdiet sem. Suspendisse pellentesque eros libero, id
          feugiat nunc suscipit sed. Cras efficitur, quam et venenatis aliquet,
          risus nunc faucibus felis, id consequat turpis leo faucibus quam.
          Pellentesque ut eros condimentum, pharetra lectus ac, imperdiet lorem.
          Mauris rhoncus mi at velit pretium, non malesuada enim dapibus. Mauris
          in convallis velit, sit amet tristique arcu.`,
  `
          Duis fringilla felis at sem luctus, a convallis felis venenatis.
          Quisque sit amet lacinia diam. Curabitur tellus lacus, maximus eget
          dapibus sed, ullamcorper nec sapien. Morbi efficitur erat a dictum
          ullamcorper. Nullam dictum faucibus tempor. Praesent viverra
          scelerisque dolor, ac malesuada sem posuere non. Aliquam in felis
          volutpat, pretium sapien sit amet, molestie lectus. Integer egestas
          metus et dui ornare viverra. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Integer ut magna odio.`,
];

export default function Editor() {
  return (
    <div className={`w-full border-2 p-4`}>
      <div>
        {lipsum.map((content, index) => (
          <Block type={`text`} content={content} key={index}></Block>
        ))}
      </div>
    </div>
  );
}
