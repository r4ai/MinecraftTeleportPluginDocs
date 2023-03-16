import Image from 'next/image';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ArrowIcon from '../public/icons/arrow.svg';

// type ItemType = {
//   'Mod name': 'Minecraft';
//   'Registry name': string;
//   'Item ID': number;
//   'Display name': string;
// };
// type ItemsType = ItemType[];
// const items = JSON.parse('../data/items.json') as ItemsType;
// const blocks = JSON.parse('../data/blocks.json') as ItemsType;
// type ItemIds = (typeof items)[number]['Registry name'];
// type BlockIds = (typeof blocks)[number]['Registry name'];

type RecipeProps = {
  patterns: string[];
  keys: {
    [key: string]: {
      item: string;
    };
  };
  result: {
    name: string;
    item: string;
  };
};

export const Recipe: FC<RecipeProps> = ({ patterns, keys, result }) => {
  function getId(key: string) {
    return keys[key].item.split(':')[1];
  }

  function getImageUrl(key: string) {
    const id = getId(key);
    return `/items/${id}.webp`;
  }

  function getWikiUrl(key: string) {
    const id = getId(key);
    const uppperCaseId = id
      .split('_')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
    return `https://minecraft.fandom.com/wiki/${uppperCaseId}`;
  }

  return (
    <div className="dimentional-border my-8 grid h-48 w-80 grid-cols-craft grid-rows-craft place-content-center rounded-md bg-craft-100 px-1">
      <div className="col-start-1 row-start-1 mx-2 mb-0 mt-1 pb-0 font-silkscreen text-lg font-semibold text-black">
        Crafting
      </div>
      <div className="border-b-3 col-start-1 row-start-2 mx-2 grid h-36 w-36 grid-cols-recipe grid-rows-recipe gap-1 place-self-center">
        {patterns.map((row) =>
          row.split('').map((cell) => (
            <div
              key={uuidv4()}
              className={`dimentional-border ${cell === ' ' ? '' : 'tooltip'} relative aspect-square bg-craft-600`}
              data-tip={cell === ' ' ? '' : getId(cell)}
            >
              {cell === ' ' ? (
                <div />
              ) : (
                <a href={getWikiUrl(cell)}>
                  <Image className="h-full w-full object-contain p-1" src={getImageUrl(cell)} alt={getId(cell)} fill />
                </a>
              )}
            </div>
          )),
        )}
      </div>
      <div className="col-start-2 row-start-2 place-self-center">
        <ArrowIcon width="50px" stroke="#8b8b8b" fill="#8b8b8b" fillOpacity={1} className="fill-craft-600" />
      </div>
      <div
        key={uuidv4()}
        className="dimentional-border tooltip relative col-start-3 row-start-2 mx-2 aspect-square h-16 w-16 place-self-center"
        data-tip={result.name}
      >
        <Image
          className="h-full w-full bg-craft-600 object-contain p-2"
          src={`/items/${result.item.split(':')[1]}.webp`}
          alt={result.name}
          fill
        />
      </div>
    </div>
  );
};
