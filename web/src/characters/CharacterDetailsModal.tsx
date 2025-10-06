import { useQuery } from "@tanstack/react-query";
import { Image, Modal, Skeleton } from "antd";
import type { Character } from "./characters";

type CharacterDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  characterId: number | null;
};

export function CharacterDetailsModal({ isOpen, onClose, characterId }: CharacterDetailsModalProps) {
  const {
    data: character,
    isPending,
    error,
  } = useQuery<Character>({
    queryKey: ["character", characterId],
    queryFn: () =>
      fetch(`/api/characters/${characterId}`)
        .then((res) => res.json())
        .catch(() => null),
    enabled: isOpen && characterId !== null,
  });

  return (
    <Modal open={isOpen} onCancel={onClose} title='Character Details' footer={null} width={600}>
      {isPending ? <Skeleton active paragraph={{ rows: 4 }} /> : null}
      {error ? <div className='text-red-500'>Failed to load character details. Please try again later.</div> : null}
      {character ? (
        <div className='flex flex-col gap-4'>
          {character.imageUrl ? (
            <Image
              src={character.imageUrl}
              alt={character.image}
              width={100}
              height={100}
              className='mx-auto mb-4 rounded-lg'
            />
          ) : null}
          {character.fullName ? <h2 className='text-2xl font-bold mb-2'>{character.fullName}</h2> : null}
          {character.title ? (
            <div>
              <strong>Title:</strong> {character.title}
            </div>
          ) : null}
          {character.family ? (
            <div>
              <strong>Family:</strong> {character.family}
            </div>
          ) : null}
          {character.firstName ? (
            <div>
              <strong>First Name:</strong> {character.firstName}
            </div>
          ) : null}
          {character.lastName ? (
            <div>
              <strong>Last Name:</strong> {character.lastName}
            </div>
          ) : null}
        </div>
      ) : null}
    </Modal>
  );
}
