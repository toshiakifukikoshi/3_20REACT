import React from "react";

import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      {/* 未完了エリア */}
      <div className="incomplete-area">
        <p className="title">未完了のTOOD</p>
        <ul>
          <div className="list-row">
            <li>吹越俊明</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>吹越俊明</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      {/* 完了エリア */}
      <div className="complete-area">
        <p className="title">完了エリア</p>
        <ul>
          <div className="list-row">
            <li>TODO</li>
            <button>戻る</button>
          </div>
        </ul>
      </div>
    </>
  );
};
