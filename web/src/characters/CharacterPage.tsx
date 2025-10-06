import { useQuery } from "@tanstack/react-query";
import { notification, Input, Layout } from "antd";
import { useMemo, useState } from "react";
import { CharactersTable } from "./CharactersTable";
import type { Character } from "./characters";

export function CharacterPage() {
  const [api, contextHolder] = notification.useNotification();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState("");

  const { isPending, data } = useQuery<Character[]>({
    queryKey: ["characters"],
    queryFn: () =>
      fetch("/api/characters")
        .then((res) => res.json())
        .catch(() => {
          api.error({
            message: "Error",
            description: "Failed to fetch characters. Please try again later.",
            placement: "topRight",
          });
          return [];
        }),
  });

  useMemo(
    () => setCharacters(data?.filter((char) => char.fullName?.toLowerCase().includes(search.toLowerCase())) || []),
    [data, search]
  );

  return (
    <>
      {contextHolder}
      <Layout.Content className='h-full my-6 mx-4'>
        <div className='h-full p-6 min-h-[360px] bg-white rounded-lg'>
          <div className='mt-6'>
            <div className='w-100'>
              <Input.Search
                placeholder='Search characters by name'
                enterButton
                className='w-10'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <br />
            <CharactersTable characters={characters} isPending={isPending} />
          </div>
        </div>
      </Layout.Content>
    </>
  );
}
