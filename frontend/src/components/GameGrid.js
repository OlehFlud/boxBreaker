import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LootBox from './LootBox';
import {loadLootBoxes, openLootBox} from '../store/actions/gameActions';
import {fetchPlayers} from '../store/actions/playerActions';
import {loadHistory} from '../store/actions/historyAction';
import {logout} from '../store/actions/authAction';
import PlayerList from "./PlayerList";
import Stats from "./Stats";
import ModalComponent from "./ModalComponent";
import {closeModalAction} from "../store/actions/modalAction";
import Timer from "./Timer";

const GameGrid = () => {
  const dispatch = useDispatch();
  const {lootBoxes, allOpened} = useSelector((state) => state.gameReducer);
  const {history} = useSelector((state) => state.historyReducer);
  const {token} = useSelector((state) => state.authReducer);
  const {isModalOpen, details} = useSelector(state => state.modalReducer);
  const [isActive, setIsActive] = useState(false);

  const handleCloseModal = async () => {
    setTimeout(()=> {
      dispatch(closeModalAction());
    },1500)
  };

  useEffect(() => {
    dispatch(loadLootBoxes())
    dispatch(fetchPlayers())
    dispatch(loadHistory(token))
  }, [dispatch])


  useEffect(() => {
    console.log('allOpened',allOpened);
    if (allOpened) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [allOpened])

  const openLootBoxById = async (id) => {
   dispatch(openLootBox(id, token))
  }

  const logOutByToken = () => {
    dispatch(logout(token))
  }

  return (
    <div>
      <div className="logout">
        <h5 onClick={() => logOutByToken()}>LogOut</h5>
      </div>
      <div>
        <div style={{display: 'flex', flexDirection: 'row', height: "500px"}}>
          <div>
            <PlayerList/>
          </div>
          <div style={{width: '100%', display: 'flex', flexDirection:'row', justifyContent: 'center', flexWrap: 'wrap'}}>
            <h4 className="mb-5">Try your luck!</h4>
            <ul className="box-list grid-container mt-5">
              {lootBoxes?.map((lute) => (
                <LootBox
                  key={lute._id}
                  id={lute._id}
                  name={lute.name}
                  isOpened={lute.isOpened}
                  onClick={openLootBoxById}
                />
              ))}
            </ul>
            <Timer
              isActive={isActive}
            />
          </div>
        </div>
        <div>
          <Stats history={history}/>
        </div>
        {isModalOpen ? <div style={{position: 'absolute',width: '100%', height: '100%'}}>
          <ModalComponent
            isOpen={isModalOpen}
            details={details}
            afterOpenModal={handleCloseModal}
            ariaHideApp={true}
            shouldCloseOnOverlayClick={true}
          />
        </div> : ''}
      </div>
    </div>
  );
};

export default GameGrid;
