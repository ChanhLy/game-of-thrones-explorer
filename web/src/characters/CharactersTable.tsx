import { Image, Table, type TableColumnsType } from "antd";
import type { Character } from "./characters";
import { useState } from "react";
import { CharacterDetailsModal } from "./CharacterDetailsModal";

const columns: TableColumnsType<Character> = [
  // {
  //   title: "ID",
  //   dataIndex: "id",
  //   key: "id",
  // },
  // {
  //   title: "First Name",
  //   dataIndex: "firstName",
  //   key: "firstName",
  // },
  // {
  //   title: "Last Name",
  //   dataIndex: "lastName",
  //   key: "lastName",
  // },
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (value, record) => (
      <Image
        className='rounded cursor-pointer'
        src={record.imageUrl}
        alt={value}
        width={50}
        height={50}
        preview={{
          mask: <div className='ant-image-mask'></div>,
        }}
        fallback='https://placehold.co/50x50'
      />
    ),
  },
];

type CharactersTableProps = {
  characters: Character[];
  isPending: boolean;
};

export function CharactersTable({ characters, isPending }: CharactersTableProps) {
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(null);

  function onClickRow(character: Character) {
    setSelectedCharacterId(character.id);
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={characters}
        loading={isPending}
        onRow={(character) => ({ onClick: () => onClickRow(character) })}
      />

      <CharacterDetailsModal
        isOpen={selectedCharacterId !== null}
        onClose={() => setSelectedCharacterId(null)}
        characterId={selectedCharacterId}
      />
    </>
  );
}
