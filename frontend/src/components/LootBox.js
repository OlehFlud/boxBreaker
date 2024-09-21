import React from 'react';

const LootBox = ({ id, isOpened, onClick }) => {
  const handleOpenLootbox = async () => {
    if (!isOpened) {
      await onClick(id)
    }
  };

  return (
    <li className="loot-box" onClick={handleOpenLootbox}>
      <button
        type="button"
        className={isOpened ? "box open" : "box closed"}
      />
      <span className="loot-shadow" />
    </li>
  );
};

export default LootBox;
