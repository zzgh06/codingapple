import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

let deferredPrompt

window.addEventListener("beforeinstallprompt", event => {
	event.preventDefault()
	deferredPrompt = event
})

const installApp = () => {
	if (!deferredPrompt) {
		alert("이미 앱이 설치되어 있거나 앱을 설치할 수 없는 환경입니다")
		return
	}

	deferredPrompt.prompt()
}

function App() {
  return (
    <div className="App">
      <button onClick={installApp}>앱 설치하기</button>
    </div>
  );
}

export default App;
