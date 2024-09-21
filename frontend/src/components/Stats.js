import React from 'react';

const Stats = ({history}) => {

  return (
    <div className="stats">
      <div className="stats-block ml-4">
        <h2>Lootbox Statistics</h2>
        <div className="openings">Total Openings: {history?.length}</div>
        <div className="item-list">
          {history?.map((item) => {
            return (
              <div className="item" key={item._id}>
                <span className="item-name">{item.lootBoxName}</span>
                <span className="item-percentage">{item.rewardId?.chance}%</span>
                <span className="item-count">{item.rewardId?.amount}</span>
              </div>
              )
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
