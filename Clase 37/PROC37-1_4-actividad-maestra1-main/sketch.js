var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
// apiKey: "AIzaSyCbkbSLt2lI9k9z0OnvRV7hzjtyIipv0Ro",
// authDomain: "multijuego-722fd.firebaseapp.com",
// databaseURL: "https://multijuego-722fd-default-rtdb.firebaseio.com",
// projectId: "multijuego-722fd",
//  storageBucket: "multijuego-722fd.appspot.com",
//  messagingSenderId: "952600583722",
//  appId: "1:952600583722:web:1ed70a098f2d59677bad53"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);