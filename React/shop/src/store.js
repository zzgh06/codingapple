import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';

// Redux Persist 설정
const persistConfig = {
  key: 'root',
  storage: storage,
};

// rootReducer에 추가할 리듀서들 추가
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux 스토어 생성
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Redux Toolkit과 Redux Persist의 충돌 방지
    }),
});

const persistor = persistStore(store);

export { store, persistor };