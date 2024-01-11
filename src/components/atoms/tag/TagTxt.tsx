import tw from 'tailwind-styled-components';

type TagT = {
  tag: string;
};

export const TagTxt = tw.span`
  felx
  items-center
  justify-center
  text-s
  text-white
  bg-[#232323]
  px-3
  py-1
  rounded
  font-bold
`;

function TagIcon({ tag }: TagT) {
  return <TagTxt>{tag}</TagTxt>;
}

export default TagIcon;
